import { useRef, useState, type JSX } from 'react';
import introVideo from '../assets/cutscene/vanessa_cutscene.mp4';
import '../Design/splash.css';
type SplashScreenProps = {
    setShowSplash: ()=> void
}

const SplashScreen = ({setShowSplash}: SplashScreenProps):JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [enableSound, setEnableSound] = useState<boolean>(false);
    //To unmute video
    const handleStart = ():void => {
        const video:HTMLVideoElement | null = videoRef.current;
        if (!video) return;
        video.muted = false;
        video.play().catch(() => {
            video.muted = true;
            video.play();
        });
        setEnableSound(true);
    };

    return(
        <div className='splash-screen'>
            <button className = 'splash-screen-close'onClick={setShowSplash}>X</button>
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={setShowSplash}
                className='introVideo'
            >
                <source src={introVideo} type='video/mp4' />
            </video>
            {!enableSound && (
                <button className='splash-start' onClick={handleStart}>
                    Enable Sound
                </button>
            )}
        </div>
    );
};
export default SplashScreen;