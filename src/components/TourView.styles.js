import styled, { keyframes } from 'styled-components';

// Copied from TourView.js
export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ViewerContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #000;
`;

export const LocationInfo = styled.div`
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

export const GlassButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #000; 
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

export const FullscreenButton = styled(GlassButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 16px;
  font-size: 0.9rem;
  border-radius: 20px;
  z-index: 1100;
`;

export const HomeButton = styled(GlassButton)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1100;
`;

export const AllViewsButton = styled(GlassButton)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1100;
`;

export const NavButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

export const NavigationButton = styled(GlassButton)`
  padding: 12px 24px;
  font-size: 1rem;
`;

export const LoadingOverlay = styled.div`
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

export const Spinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.8);
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 3000;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const ModalContent = styled.div`
  background: #fff;
  color: #333;
  padding: 24px 32px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const TutorialContent = styled(ModalContent)`
  max-width: 550px;
  padding: 40px 48px;
  border-radius: 16px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
`;

export const ProgressBarFill = styled.div`
  height: 8px;
  background: #000;
  width: ${({ $progress }) => $progress}%;
  transition: width 0.3s ease;
`;

export const FixedHotspot = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30%;
  transform: translateX(-50%);
  padding: 10px 16px;
  background: rgba(255,255,255,0.8);
  border-radius: 8px;
  cursor: pointer;
  z-index: 1500;
  font-size: 1rem;
  color: #000;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);

  &:hover {
    background: rgba(255,255,255,1);
  }
`;

export const ThumbnailSidebar = styled.div`
  position: absolute;
  bottom: 70px; 
  right: 20px;
  width: 320px; 
  max-height: 80vh; 
  background: rgba(255, 255, 255, 0.4); 
  border: 1px solid rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(12px); 
  border-radius: 12px;
  padding: 20px 18px; 
  overflow-y: auto;
  z-index: 2500;
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  color: #000;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3); 
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ListViewCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  background: rgba(255, 255, 255, 0.6); 

  &:hover {
    background: rgba(255, 255, 255, 0.75); 
  }
`;

export const ListThumbnail = styled.img`
  width: 80px; 
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 15px;
  border: 1px solid rgba(0, 0, 0, 0.05); 
`;

export const ListCardTitle = styled.div`
  font-size: 0.9rem; 
  font-weight: 600; 
  color: #000; 
  flex-grow: 1;
`; 