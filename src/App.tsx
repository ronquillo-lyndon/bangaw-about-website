import { useState, type JSX } from 'react';
import SplashScreen from './components/SplashScreen';
import HomePage from './components/HomePage';
import AboutGame from './components/AboutGame';
import FliesContainer from './components/Flies/FliesContainer';
import SketchesContainer from './components/Sketch/SketchesContainer';
import Navbar from './components/Navbar';

function App():JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  return (
    <>
      {showSplash ? (
        <SplashScreen setShowSplash={() => setShowSplash(false)}/>
        ) : (
          <>
            <Navbar />
            <main>
              <div id='home'>
                <HomePage />
              </div>
              <div id='about'>
                <AboutGame />
              </div>
              <div id='flies'>
                <FliesContainer />
              </div>
              <div id='sketches'>
                <SketchesContainer />
              </div>
            </main>
          </>
        )}
    </>
  )
}

export default App
