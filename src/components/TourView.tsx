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

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ViewerContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #000;
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
`;

const Spinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LocationInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  background-color: rgba(20, 20, 20, 0.85);
  color: #fff;
  padding: 20px 28px;
  border-radius: 10px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 350px;
  font-size: 1rem;
`;

const GlassButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #fdfdfd;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const FullscreenButton = styled(GlassButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1100;
`;

const HomeButton = styled(GlassButton)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1100;
`;

const AllViewsButton = styled(GlassButton)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1100;
`;

const NavButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const NavigationButton = styled(GlassButton)`
  padding: 12px 24px;
  font-size: 1rem;
`;

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

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  };

  const handlePanoramaLoad = () => {
    setIsLoading(false);
  };

  const currentData = locations[currentLocation];

  return (
    <ViewerContainer>
      <LoadingOverlay $isLoading={isLoading}>
        <Spinner />
      </LoadingOverlay>

      <LocationInfo>
        <h3>{currentData.title}</h3>
        <p>{currentData.info}</p>
      </LocationInfo>

      <FullscreenButton onClick={toggleFullscreen}>
        {isFullscreen ? t('buttons.exitFullscreen') : t('buttons.fullscreen')}
      </FullscreenButton>

      <HomeButton onClick={() => dispatch(setCurrentLocation(13))}>
        {t('buttons.home')}
      </HomeButton>

      <AllViewsButton onClick={() => setShowAllViews(true)}>
        {t('buttons.allViews')}
      </AllViewsButton>

      <NavButtonContainer>
        <NavigationButton onClick={() => dispatch(goBack())}>
          {t('buttons.previous')}
        </NavigationButton>
      </NavButtonContainer>

      <Pannellum
        width="100%"
        height="100vh"
        image={currentData.image}
        pitch={0}
        yaw={0}
        hfov={110}
        autoRotate={2}
        ref={panImageRef}
        autoLoad
        onLoad={handlePanoramaLoad}
        hotspotDebug={false}
      />

      <MiniMap />
    </ViewerContainer>
  );
};

export default TourView;