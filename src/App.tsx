import { useState, type JSX } from 'react'
import SplashScreen from './components/SplashScreen'
import './App.css'

function App():JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)}/>
        ) : (
          <main>
            <h1>Welcome to Vanessa</h1>
            <p>This is the main for temporary</p>
          </main>
        )}
    </>
  )
}

export default App
