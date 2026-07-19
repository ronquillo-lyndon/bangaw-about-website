import type { JSX } from 'react';
import introVideo from '../assets/cutscene/vanessa_cutscene.mp4';

type SplashScreenProps = {
    onFinish: ()=> void
}

const SplashScreen = ({onFinish}: SplashScreenProps):JSX.Element => {
    return(
        <div className='splash-screen'>
            <video
                autoPlay
                muted
                playsInline
                onEnded={onFinish}
                className='introVideo'
            >
                <source src={introVideo} type='video/mp4' />
            </video>
        </div>
    );
};
export default SplashScreen;