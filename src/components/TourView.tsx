import React, { useState, useRef, useEffect } from 'react';
import { Pannellum } from 'pannellum-react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setCurrentLocation, goBack } from '../store/tourSlice';
import MiniMap from './MiniMap';
import { Location, HotSpot, TutorialStep } from '../types';
import { locations } from '../data/locations';
import { zoomIn, fadeIn, pulse } from '../styles/animations';

// ... [Previous styled components remain the same]

const TourView: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLocation = useSelector((state: RootState) => state.tour.currentLocation);
  const [isLoading, setIsLoading] = useState(true);
  const [showAllViews, setShowAllViews] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);
  const panImageRef = useRef<any>(null);

  // ... [Rest of the component implementation remains the same]

  return (
    <ViewerContainer>
      {/* ... [Rest of the JSX remains the same] */}
    </ViewerContainer>
  );
};

export default TourView;