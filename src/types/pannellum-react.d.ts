declare module 'pannellum-react' {
  import { ReactNode } from 'react';

  interface PannellumProps {
    width?: string;
    height?: string;
    image: string;
    pitch?: number;
    yaw?: number;
    hfov?: number;
    autoLoad?: boolean;
    onLoad?: () => void;
    autoRotate?: number;
    children?: ReactNode;
    hotspotDebug?: boolean;
  }

  interface HotspotProps {
    type: string;
    pitch: number;
    yaw: number;
    text?: string;
    cssClass?: string;
    handleClick?: () => void;
  }

  export class Pannellum extends React.Component<PannellumProps> {
    static Hotspot: React.FC<HotspotProps>;
  }
}