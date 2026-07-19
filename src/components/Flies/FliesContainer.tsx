import { useState, type JSX } from 'react';
import Flies from './AboutFlies';
import FlyContainer from './FlyContainer';

const FliesContainer = (): JSX.Element => {
    const [index, setIndex] = useState<number>(0);

    const prevFly = () => {
        setIndex((i) => (i - 1 + Flies.length) % Flies.length);
    };
    const nextFly = () => {
        setIndex((i) => (i + 1) % Flies.length);
    };

    const translatePercent = index * 100;

    return (
        <div className='flies-container'>
            <button className='flies-nav flies-nav-left' onClick={prevFly} aria-label='previous fly'>&#8592;</button>
            <div className='flies-viewport'>
                <div
                    className='flies-track'
                    style={{ transform: `translateX(-${translatePercent}%)` }}
                >
                    {Flies.map((fly) => (
                        <div className='flies-slide' key={fly.fly_name}>
                            <FlyContainer fly={fly} />
                        </div>
                    ))}
                </div>
            </div>
            <button className='flies-nav flies-nav-right' onClick={nextFly} aria-label='next fly'>&#8594;</button>
        </div>
    );
};

export default FliesContainer;
