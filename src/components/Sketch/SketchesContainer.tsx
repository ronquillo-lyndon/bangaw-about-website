import { type JSX } from 'react';
import { SketchContents } from './SketchContents';
import SketchContainer from './Sketch';

const SketchesContainer = (): JSX.Element => {
    return (
        <>
        <div className='Title-part'>Sketches</div>
            <div className='sketches-container'>
                <div className='sketches-wrapper'>
                    {SketchContents.map((sketch) => (
                        <SketchContainer key={sketch.sketch_name} sketch={sketch} />
                    ))}
                </div>
                <p className='animator-name'>Animator and Designer: Guillian B. Martin</p>
            </div>
        
        </>
    );
};

export default SketchesContainer;
