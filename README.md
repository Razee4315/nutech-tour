# NuTech 360° Virtual Tour

## Project Overview

This is a React-based 360° Virtual Tour application that allows users to explore different locations through interactive panoramic images with customizable hotspots.

## Features

- 360° Panoramic Image Viewing
- Interactive Hotspots
- Multiple Location Navigation
- Responsive Design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository
```bash
git clone https://github.com/Razee4315/nutech-tour.git
cd nutech-tour
```

2. Install dependencies
```bash
npm install
```

**Note**: Dependency conflicts have been resolved! The `--legacy-peer-deps` flag is no longer required.

## Running the Project

To run the project locally:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Understanding Hotspots

### What are Hotspots?

Hotspots are interactive points on a 360° panoramic image that users can click to:
- Navigate between scenes
- Display information
- Trigger custom actions

### Hotspot Types in This Project

1. **Custom Hotspots**
   - Allow custom interactions
   - Can navigate between images
   - Defined with `type: "custom"`

2. **Info Hotspots**
   - Display informational alerts
   - Defined with `type: "info"`

### Hotspot Configuration Example

```javascript
{
  pitch: -10,  // Vertical position
  yaw: 0,      // Horizontal position
  type: "custom",
  text: "Go to Second Image",
  handleClick: (setCurrentLocation) => {
    setCurrentLocation(1);  // Change to the second location
  }
}
```

## Project Structure

- `src/components/TourView.js`: Main component for 360° tour
- `public/images/`: Store your 360° panoramic images here
- `src/styles/`: Additional styling (if needed)


## Recent Updates

### Dependency Conflicts Resolved ✅
- **React 19 Compatibility**: Updated all dependencies to support React 19
- **No More Legacy Peer Deps**: Removed the need for `--legacy-peer-deps` flag
- **Updated Dependencies**:
  - `@testing-library/react` → v15.0.0 (React 19 compatible)
  - `@types/react` → v19.0.0
  - `@types/react-dom` → v19.0.0
  - `react-i18next` → v15.0.0
  - `typescript` → v4.9.5 (compatible with react-scripts)

## Troubleshooting

- Ensure all images are in the correct format (jpg/png)
- Check browser console for any errors
- Verify Node.js and npm versions
- If you encounter dependency issues, try deleting `node_modules` and `package-lock.json`, then run `npm install`

## Technologies Used

- React
- Pannellum React
- Styled Components

## Contact

Our Team members:
- Saqlain Abbas (saqlainrazee@gmail.com)
- Aleena Tahir (aleenatahirf23@nutech.edu.pk)
- Aena Habib (aenahabibf23@nutech.edu.pk)
- Sadia Mazhar (saidamazharf23@nutech.edu.pk)
- Malaika Akhtar (malaikaakhtarf23@nutech.edu.pk)
  

Project Link: [https://razee4315.github.io/nutech-tour/](https://razee4315.github.io/nutech-tour/)
