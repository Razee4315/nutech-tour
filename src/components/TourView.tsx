import React, { useState, useRef, useEffect } from 'react';
import { Pannellum } from 'pannellum-react';
import styled, { keyframes, css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setCurrentLocation, goBack } from '../store/tourSlice';
import MiniMap from './MiniMap';
import { Location, HotSpot, TutorialStep } from '../types';

const zoomIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const ViewerContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  animation: ${fadeIn} 0.5s ease-out;
`;

const LocationInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px 28px;
  border-radius: 15px;
  z-index: 1000;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  max-width: 350px;
  transform-origin: left top;
  animation: ${zoomIn} 0.3s ease-out;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #fff;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const BaseButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
      background: rgba(0, 0, 0, 0.6);
      border-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const NavigationButton = styled(BaseButton)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${pulse} 2s infinite;

  &:hover {
    animation: none;
  }
`;

const ControlButton = styled(BaseButton)`
  position: absolute;
  z-index: 1000;
`;

const HomeButton = styled(ControlButton)`
  bottom: 30px;
  left: 30px;
`;

const FullscreenButton = styled(ControlButton)`
  top: 30px;
  right: 30px;
`;

const ViewsButton = styled(ControlButton)`
  bottom: 30px;
  right: 30px;
`;

const LoadingOverlay = styled.div<{ $isLoading: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: ${({ $isLoading }) => ($isLoading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ModalOverlay = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 3000;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.3s ease;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  position: relative;
  animation: ${zoomIn} 0.3s ease-out;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const ViewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
  padding: 10px;
`;

const ViewCard = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ViewCard}:hover & {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.div`
  padding: 12px;
  font-weight: 600;
  text-align: center;
  color: #333;
  background: #fff;
  position: relative;
  z-index: 1;
`;

// ... Rest of your existing TourView component code with the updated styling ...

export default TourView;