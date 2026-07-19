import { useRef, useState, type JSX } from 'react';
import introVideo from '../assets/cutscene/vanessa_cutscene.mp4';

type SplashScreenProps = {
    onFinish: ()=> void
}

const SplashScreen = ({onFinish}: SplashScreenProps):JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [enableSound, setEnableSound] = useState<boolean>(false);

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
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={onFinish}
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