import { type JSX } from 'react';
import { type SketchContent } from './SketchContents';
import '../../Design/sketch-container.css'
export type SketchProps = {
    sketch: SketchContent;
};

const SketchContainer = ({ sketch }: SketchProps): JSX.Element => {
    return (
        <div className='sketch-card'>
            <div className='sketch-image-wrapper'>
                <img
                    src={sketch.location}
                    alt={sketch.sketch_name}
                    className='sketch-image'
                />
            </div>
            <span className='sketch-name'>{sketch.sketch_name}</span>
        </div>
    );
};

export default SketchContainer;
