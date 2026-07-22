import { useState, type JSX } from 'react';
import { SketchContents } from './SketchContents';
import SketchContainer from './Sketch';

const SketchesContainer = (): JSX.Element => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const visibleSketches = expanded ? SketchContents : SketchContents.slice(0, 4);
    return (
        <>
        <div className='Title-part'>Sketches</div>
            <div className='sketches-container'>
                <div className={`sketches-wrapper ${!expanded ? 'collapsed' : ''}`}>
                    {visibleSketches.map((sketch) => (
                        <SketchContainer key={sketch.sketch_name} sketch={sketch} />
                    ))}
                </div>
                <button className='sketches-read-more' onClick={() => setExpanded((e) => !e)}>
                    {expanded ? 'Show less ▴' : 'Tap to show more ▾'}
                </button>
                <p className='animator-name'>Animator and Designer: Guillian B. Martin</p>
            </div>
        
        </>
    );
};

export default SketchesContainer;
