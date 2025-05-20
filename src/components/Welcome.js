import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles (optional) to reset margins and include font-family
const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    height: 100%;
  }
`;

// Outer wrapper for the welcome page with relative positioning
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

// Background image with subtle blur and scale to hide filter edges
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('${process.env.PUBLIC_URL}/background.jpg') center center/cover no-repeat;
  filter: blur(3px);
  transform: scale(1.05);
  z-index: 1;
`;

// Gradient overlay to ensure content readability
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
  z-index: 2;
`;

// Central content container
const Content = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  color: #fff;
`;

// Main title styling
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
`;

// Subtitle styling
const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.5);
`;

// Glassmorphism style for the start button
const StartButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fdfdfd;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-3px) scale(1.03);
    background: rgba(255, 255, 255, 0.25);
  }
`;

// The Welcome component
const Welcome = ({ onStart }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BackgroundImage />
        <Overlay />
        <Content>
          <Title>NUTECH Job Fair 2025</Title>
          <Subtitle>Connecting Talent with Opportunity</Subtitle>
          <StartButton onClick={onStart}>Start Virtual Tour</StartButton>
        </Content>
        
      </Wrapper>
    </>
  );
};

export default Welcome;
