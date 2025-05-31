import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Welcome from './components/Welcome';
import TourView from './components/TourView';
import './App.css';

const App: React.FC = () => {
  const [showTour, setShowTour] = useState(false);
  const { t } = useTranslation();

  const handleStart = () => {
    setShowTour(true);
  };

  return (
    <div className="App">
      {!showTour ? (
        <Welcome onStart={handleStart} />
      ) : (
        <TourView />
      )}
    </div>
  );
};

export default App;