import { useState, type JSX } from 'react';
import SplashScreen from './components/SplashScreen';
import HomePage from './components/HomePage';
import AboutGame from './components/AboutGame';
import FliesContainer from './components/Flies/FliesContainer';
import SketchesContainer from './components/Sketch/SketchesContainer';
function App():JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  return (
    <>
      {showSplash ? (
        <SplashScreen setShowSplash={() => setShowSplash(false)}/>
        ) : (
          <main>
            <HomePage />
            <AboutGame />
            <FliesContainer />
            <SketchesContainer />
          </main>
        )}
    </>
  )
}

export default App
