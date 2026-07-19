import { useState, type JSX } from 'react';
import SplashScreen from './components/SplashScreen';
import './App.css';
import HomePage from './components/HomePage';
function App():JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)}/>
        ) : (
          <main>
            <HomePage />
          </main>
        )}
    </>
  )
}

export default App
