import React, { useState } from 'react';
import Welcome from './components/Welcome';
import TourView from './components/TourView';
import { GlobalStyle } from './globalStyles';
import './App.css';

function App() {
  const [showTour, setShowTour] = useState(false);

  const handleStart = () => {
    setShowTour(true);
  };

  return (
    <div className="App">
      <GlobalStyle />
      {!showTour ? (
        <Welcome onStart={handleStart} />
      ) : (
        <TourView />
      )}
    </div>
  );
}

export default App;
