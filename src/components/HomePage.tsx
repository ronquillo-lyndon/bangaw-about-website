import type {JSX} from 'react';
import HomePageSplashScreen from '../assets/background/splash_screen.png';

const HomePage = ():JSX.Element => {
    return(
        <div className='HomePage'>
            <img src={HomePageSplashScreen}></img>
        </div>
    );
};

export default HomePage;