import React, { useState, useRef, useEffect } from 'react';
import { Pannellum } from 'pannellum-react';
import { locations, tutorialSteps } from './tourData'; // Import data
import {
  ViewerContainer,
  LocationInfo,
  GlassButton,
  FullscreenButton,
  HomeButton,
  AllViewsButton,
  NavButtonContainer,
  NavigationButton,
  LoadingOverlay,
  Spinner,
  ModalOverlay,
  TutorialContent,
  ProgressBarContainer,
  ProgressBarFill,
  FixedHotspot,
  ThumbnailSidebar,
  ListViewCard,
  ListThumbnail,
  ListCardTitle
} from './TourView.styles.js';

const TourView = () => {
  const [currentLocation, setCurrentLocation] = useState(6);
  const [visitHistory, setVisitHistory] = useState([6]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAllViews, setShowAllViews] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);
  const panImageRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const currentData = locations[currentLocation];

  const handleHotspotClick = (hotspot) => {
    if (hotspot.handleClick) {
      hotspot.handleClick(setCurrentLocation);
    }
  };

  useEffect(() => {
    if (visitHistory.length === 1 && visitHistory[0] === currentLocation) {
      return;
    }
    
    if (visitHistory[visitHistory.length - 1] !== currentLocation) {
      setVisitHistory(prevHistory => [...prevHistory, currentLocation]);
    }
  }, [currentLocation, visitHistory]);

  const goToPreviousLocation = () => {
    if (visitHistory.length > 1) {
      const newHistory = [...visitHistory];
      newHistory.pop();
      const previousLocation = newHistory[newHistory.length - 1];
      setCurrentLocation(previousLocation);
      setVisitHistory(newHistory);
    }
  };

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

  const handleTutorialNext = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setShowTutorial(false);
    }
  };

  const progressPercent = ((tutorialStep + 1) / tutorialSteps.length) * 100;
  
  const handleMouseEnterAllViews = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setShowAllViews(true);
  };

  const handleMouseLeaveAllViews = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowAllViews(false);
    }, 300);
  };

  return (
    <ViewerContainer>
      <LoadingOverlay $isLoading={isLoading}>
        <Spinner />
      </LoadingOverlay>

      <FullscreenButton onClick={toggleFullscreen}>
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </FullscreenButton>

      <HomeButton onClick={() => {
        setCurrentLocation(6);
        setVisitHistory([6]);
      }}>Home</HomeButton>

      <AllViewsButton
        onMouseEnter={handleMouseEnterAllViews}
        onMouseLeave={handleMouseLeaveAllViews}
      >
        All Views
      </AllViewsButton>

      <LocationInfo>
        <h3>{currentData.title}</h3>
        <p>{currentData.info}</p>
      </LocationInfo>

      <Pannellum
        width="100%"
        height="100vh"
        image={currentData.image}
        pitch={0}
        yaw={0}
        hfov={110}
        autoRotate={false}
        ref={panImageRef}
        autoLoad
        onLoad={handlePanoramaLoad}
        hotspotDebug={false}
      >
        {currentData.hotSpots
          .filter((hotspot) => !hotspot.fixed)
          .map((hotspot, index) => (
            <Pannellum.Hotspot
              key={index}
              type={hotspot.type}
              pitch={hotspot.pitch}
              yaw={hotspot.yaw}
              text={hotspot.text}
              cssClass={hotspot.cssClass || 'custom-hotspot'}
              handleClick={hotspot.handleClick ? () => handleHotspotClick(hotspot) : null}
            />
          ))}
      </Pannellum>

      {currentData.hotSpots
        .filter((hotspot) => hotspot.fixed)
        .map((hotspot, index) => (
          <FixedHotspot
            key={index}
            onClick={() => handleHotspotClick(hotspot)}
          >
            {hotspot.text}
          </FixedHotspot>
        ))}

      {currentLocation !== 6 && (
        <NavButtonContainer>
          <NavigationButton onClick={goToPreviousLocation} disabled={visitHistory.length <= 1}>
            Previous Location
          </NavigationButton>
        </NavButtonContainer>
      )}

      <ThumbnailSidebar
        $show={showAllViews}
        onMouseEnter={handleMouseEnterAllViews}
        onMouseLeave={handleMouseLeaveAllViews}
      >
        <h4 style={{ marginTop: '0', marginBottom: '20px', textAlign: 'center', fontWeight: '700', color: '#000' }}>Available Views</h4>
        {locations.map((loc, index) => (
          <ListViewCard
            key={loc.id}
            onClick={() => {
              if (index !== currentLocation) {
                setCurrentLocation(index);
              }
            }}
          >
            <ListThumbnail src={loc.image} alt={loc.title} />
            <ListCardTitle>{loc.title}</ListCardTitle>
          </ListViewCard>
        ))}
      </ThumbnailSidebar>

      {showTutorial && (
        <ModalOverlay $show={showTutorial}>
          <TutorialContent>
            <h3>
              Step {tutorialStep + 1} of {tutorialSteps.length}: {tutorialSteps[tutorialStep].title}
            </h3>
            <ProgressBarContainer>
              <ProgressBarFill $progress={progressPercent} />
            </ProgressBarContainer>
            <p>{tutorialSteps[tutorialStep].content}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              <GlassButton onClick={() => setShowTutorial(false)}>Skip Tutorial</GlassButton>
              <GlassButton onClick={handleTutorialNext}>
                {tutorialStep < tutorialSteps.length - 1 ? 'Next' : 'Finish'}
              </GlassButton>
            </div>
          </TutorialContent>
        </ModalOverlay>
      )}
    </ViewerContainer>
  );
};

export default TourView;