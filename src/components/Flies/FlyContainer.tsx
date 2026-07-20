import { useEffect, useState, type JSX } from 'react';
import { type Fly } from './AboutFlies';

type FlyContainerProps = {
    fly: Fly;
};

const FlyContainer = ({ fly }: FlyContainerProps): JSX.Element => {
    const [actionIndex, setActionIndex] = useState<number>(0);
    const [frameIndex, setFrameIndex] = useState<number>(0);
    const [playing, setPlaying] = useState<boolean>(false);

    const action = fly.actions[actionIndex];
    const frameCount = Math.max(1, action.frame || 1);

    useEffect(() => {
        setFrameIndex(0);
        setPlaying(false);
    }, [actionIndex]);

    useEffect(() => {
        if (!playing) return;
        const id = window.setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % frameCount);
        }, 100);
        return () => window.clearInterval(id);
    }, [playing, frameCount]);

    const togglePlay = () => setPlaying((p) => !p);

    const prevAction = () => {
        setActionIndex((i) => (i - 1 + fly.actions.length) % fly.actions.length);
    };
    const nextAction = () => {
        setActionIndex((i) => (i + 1) % fly.actions.length);
    };

    const frameWidthPercent = 100 / frameCount;
    const translatePercent = frameIndex * frameWidthPercent;
    const spriteStyle = {
        backgroundImage: `url(${action.location})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${frameCount * 100}% 100%`,
        backgroundPosition: `${frameIndex * (100 / (frameCount - 1 || 1))}% 0`,
    };

    return (
        <div className='fly-container'>
            <h1 className='fly-name'>{fly.fly_name}</h1>
            <div className='fly-body'>
                <div className='fly-left'>
                    <span className='action-name'>{action.action_name}</span>
                    <div
                        className='sprite-viewport sprite-frame'
                        style={spriteStyle}
                        onClick={togglePlay}
                    />
                    <div className='sprite-controls'>
                        <button onClick={prevAction}>&#8592;</button>
                        <button onClick={nextAction}>&#8594;</button>
                    </div>
                </div>
                <div className='fly-right'>
                    <p className='fly-description'>{fly.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FlyContainer;
