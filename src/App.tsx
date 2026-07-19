import { useState, type JSX } from 'react';
import SplashScreen from './components/SplashScreen';
import './App.css';
import HomePage from './components/HomePage';
import FliesContainer from './components/Flies/FliesContainer';
function App():JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)}/>
        ) : (
          <main>
            <HomePage />
            <FliesContainer />
          </main>
        )}
    </>
  )
}

export default App
