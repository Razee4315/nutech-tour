import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setCurrentLocation } from '../store/tourSlice';

const MapContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 200px;
`;

const LocationDot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#007bff' : '#ccc'};
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const MapImage = styled.div`
  width: 180px;
  height: 180px;
  background: #f0f0f0;
  position: relative;
  border-radius: 4px;
`;

const locationCoordinates = [
  { x: 50, y: 30 },  // Academic Block
  { x: 70, y: 50 },  // Campus Pathway
  { x: 90, y: 70 },  // Main walkway
  { x: 110, y: 90 }, // Admin Block
  // Add coordinates for all locations
];

const MiniMap: React.FC = () => {
  const currentLocation = useSelector((state: RootState) => state.tour.currentLocation);
  const dispatch = useDispatch();

  return (
    <MapContainer>
      <MapImage>
        {locationCoordinates.map((coord, index) => (
          <LocationDot
            key={index}
            style={{ left: coord.x, top: coord.y }}
            active={currentLocation === index}
            onClick={() => dispatch(setCurrentLocation(index))}
          />
        ))}
      </MapImage>
    </MapContainer>
  );
};

export default MiniMap;