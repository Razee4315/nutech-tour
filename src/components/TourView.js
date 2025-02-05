import React, { useState, useRef } from 'react';
import { Pannellum } from 'pannellum-react';
import styled, { keyframes } from 'styled-components';

// Spinner keyframes for loading animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Main viewer container with a dark background
const ViewerContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #000;
`;

// Styled info box at top left (displays location title and description)
const LocationInfo = styled.div`
  position: absolute;
  top: 5px;
  left: 40px;
  background-color: rgba(20, 20, 20, 0.85);
  color: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  max-width: 300px;
`;

// Glassmorphism style for buttons
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
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    background: rgba(255, 255, 255, 0.25);
  }
`;

// Fullscreen toggle button at top right (ensuring it stays visible)
const FullscreenButton = styled(GlassButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 16px;
  font-size: 0.9rem;
  border-radius: 20px;
  z-index: 1100;
`;

// Loading overlay with a spinner
const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
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

// Navigation container for previous and next buttons, positioned at the bottom center
const NavButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  gap: 20px;
`;

// Navigation buttons using the glass style
const NavigationButton = styled(GlassButton)`
  padding: 12px 24px;
  font-size: 1rem;
`;

// Modal overlay for displaying hotspot information
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.8);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 3000;
`;

// Modal content styling
const ModalContent = styled.div`
  background: #fff;
  color: #333;
  padding: 24px 32px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

// Modal close button using glass style for consistency
const ModalCloseButton = styled(GlassButton)`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 0.9rem;
  background: rgba(20, 20, 20, 0.15);
  border: 1px solid rgba(20, 20, 20, 0.3);
  color: #fdfdfd;

  &:hover {
    background: rgba(20, 20, 20, 0.25);
  }
`;

// Reusable modal component for hotspot information
const InfoModal = ({ show, onClose, title, message }) => (
  <ModalOverlay show={show}>
    <ModalContent>
      {title && <h3>{title}</h3>}
      <p>{message}</p>
      <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
    </ModalContent>
  </ModalOverlay>
);

/* ---------------------------------------------------------------------------
   Tour location data and hotspot configuration:
   The tour now includes 7 locations. Each location has:
     - A navigation hotspot (to go to the next image; the last location loops back to the first)
     - An info hotspot (to display additional information)
--------------------------------------------------------------------------- */
const locations = [
  {
    id: 1,
    title: 'Location 1',
    image: `${process.env.PUBLIC_URL}/images/1.jpg`,
    info: 'Explore the vibrant atmosphere of Location 1.',
    hotSpots: [
      {
        // Navigation hotspot: go to Location 2
        pitch: -10,
        yaw: 0,
        type: 'custom',
        text: 'Go to Location 2',
        handleClick: (setCurrentLocation) => {
          setCurrentLocation(1);
        }
      },
      {
        // Info hotspot
        pitch: 15,
        yaw: 90,
        type: 'info',
        text: 'Learn More',
        handleClick: null
      }
    ]
  },
  {
    id: 2,
    title: 'Location 2',
    image: `${process.env.PUBLIC_URL}/images/2.jpg`,
    info: 'Step into the serene views of Location 2.',
    hotSpots: [
      {
        // Navigation hotspot: go to Location 3
        pitch: -10,
        yaw: 0,
        type: 'custom',
        text: 'Go to Location 3',
        handleClick: (setCurrentLocation) => {
          setCurrentLocation(2);
        }
      },
      {
        // Info hotspot
        pitch: 10,
        yaw: 80,
        type: 'info',
        text: 'More Details',
        handleClick: null
      }
    ]
  },
  {
    id: 3,
    title: 'Location 3',
    image: `${process.env.PUBLIC_URL}/images/3.jpg`,
    info: 'Discover the historical charm of Location 3.',
    hotSpots: [
      {
        // Navigation hotspot: go to Location 4
        pitch: -12,
        yaw: 5,
        type: 'custom',
        text: 'Go to Location 4',
        handleClick: (setCurrentLocation) => {
          setCurrentLocation(3);
        }
      },
      {
        // Info hotspot
        pitch: 18,
        yaw: 70,
        type: 'info',
        text: 'View Info',
        handleClick: null
      }
    ]
  },
  {
    id: 4,
    title: 'Location 4',
    image: `${process.env.PUBLIC_URL}/images/4.jpg`,
    info: 'Immerse yourself in the beauty of Location 4.',
    hotSpots: [
      {
        // Navigation hotspot: go to Location 5
        pitch: -8,
        yaw: 15,
        type: 'custom',
        text: 'Go to Location 5',
        handleClick: (setCurrentLocation) => {
          setCurrentLocation(4);
        }
      },
      {
        // Info hotspot
        pitch: 12,
        yaw: 95,
        type: 'info',
        text: 'Discover More',
        handleClick: null
      }
    ]
  },
  {
    id: 5,
    title: 'Location 5',
    image: `${process.env.PUBLIC_URL}/images/5.jpg`,
    info: 'Witness breathtaking scenes at Location 5.',
    hotSpots: [
      {
        // Navigation hotspot: go to Location 6
        pitch: -10,
        yaw: 0,
        type: 'custom',
        text: 'Go to Location 6',
        handleClick: (setCurrentLocation) => {
          setCurrentLocation(5);
        }
      },
      {
        // Info hotspot
        pitch: 14,
        yaw: 85,
        type: 'info',
        text: 'More Info',
        handleClick: null
      }
    ]
  },
  {
    id: 6,
    title: 'Location 6',
    image: `${process.env.PUBLIC_URL}/images/6.jpg`,
    info: 'Experience the dynamic energy of Location 6.',
    hotSpots: [
      {
        // Navigation hotspot: go to Location 7
        pitch: -10,
        yaw: 0,
        type: 'custom',
        text: 'Go to Location 7',
        handleClick: (setCurrentLocation) => {
          setCurrentLocation(6);
        }
      },
      {
        // Info hotspot
        pitch: 16,
        yaw: 100,
        type: 'info',
        text: 'Learn More',
        handleClick: null
      }
    ]
  },
  {
    id: 7,
    title: 'Location 7',
    image: `${process.env.PUBLIC_URL}/images/7.jpg`,
    info: 'Conclude your tour with the stunning Location 7.',
    hotSpots: [
      {
        // Navigation hotspot: loop back to Location 1
        pitch: -10,
        yaw: 0,
        type: 'custom',
        text: 'Back to Location 1',
        handleClick: (setCurrentLocation) => {
          setCurrentLocation(0);
        }
      },
      {
        // Info hotspot
        pitch: 20,
        yaw: 110,
        type: 'info',
        text: 'Final Info',
        handleClick: null
      }
    ]
  }
];

const TourView = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [modalInfo, setModalInfo] = useState({ show: false, title: '', message: '' });
  const panImageRef = useRef(null);

  // Get current location data
  const currentData = locations[currentLocation];

  // Navigation handlers (optional if using external navigation buttons)
  const goToPreviousLocation = () =>
    setCurrentLocation((prev) => (prev - 1 + locations.length) % locations.length);

  const goToNextLocation = () =>
    setCurrentLocation((prev) => (prev + 1) % locations.length);

  // Toggle fullscreen mode using the Fullscreen API
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  };

  // Called when the panorama has fully loaded
  const handlePanoramaLoad = () => {
    setIsLoading(false);
  };

  // Default handler for hotspots without a custom action: display modal
  const handleHotspotInfo = (hotspot) => {
    setModalInfo({
      show: true,
      title: hotspot.text,
      message: `Detailed information about ${currentData.title}.`
    });
  };

  const closeModal = () => {
    setModalInfo({ show: false, title: '', message: '' });
  };

  return (
    <ViewerContainer>
      {/* Loading overlay with spinner */}
      <LoadingOverlay isLoading={isLoading}>
        <Spinner />
      </LoadingOverlay>

      {/* Fullscreen toggle button */}
      <FullscreenButton onClick={toggleFullscreen}>
        Fullscreen
      </FullscreenButton>

      {/* Location information box */}
      <LocationInfo>
        <h3>{currentData.title}</h3>
        <p>{currentData.info}</p>
      </LocationInfo>

      {/* 360° Panorama Viewer */}
      <Pannellum
        width="100%"
        height="100vh"
        image={currentData.image}
        pitch={10} // Initial pitch
        yaw={180}  // Initial yaw
        hfov={110}
        autoRotate={2}  // Auto-rotate speed
        ref={panImageRef}
        autoLoad
        onLoad={handlePanoramaLoad}
      >
        {currentData.hotSpots.map((hotspot, index) => (
          <Pannellum.Hotspot
            key={index}
            type={hotspot.type}
            pitch={hotspot.pitch}
            yaw={hotspot.yaw}
            text={hotspot.text}
            handleClick={() => {
              if (hotspot.handleClick) {
                hotspot.handleClick(setCurrentLocation);
              } else {
                handleHotspotInfo(hotspot);
              }
            }}
          />
        ))}
      </Pannellum>

      {/* Optional external navigation buttons */}
      {locations.length > 1 && (
        <NavButtonContainer>
          <NavigationButton onClick={goToPreviousLocation}>
            Previous Location
          </NavigationButton>
          <NavigationButton onClick={goToNextLocation}>
            Next Location
          </NavigationButton>
        </NavButtonContainer>
      )}

      {/* Info modal for hotspots */}
      <InfoModal
        show={modalInfo.show}
        onClose={closeModal}
        title={modalInfo.title}
        message={modalInfo.message}
      />
    </ViewerContainer>
  );
};

export default TourView;
