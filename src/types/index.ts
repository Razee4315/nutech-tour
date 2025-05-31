export interface Location {
  id: number;
  title: string;
  image: string;
  info: string;
  hotSpots: HotSpot[];
}

export interface HotSpot {
  yaw: number;
  pitch: number;
  type: 'custom' | 'info';
  text: string;
  cssClass?: string;
  handleClick?: (setCurrentLocation: (index: number) => void) => void;
  fixed?: boolean;
}

export interface TutorialStep {
  title: string;
  content: string;
}