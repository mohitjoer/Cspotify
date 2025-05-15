import Slider from '@mui/material/Slider';
import React from 'react';      
        
function MusicBar() {
        return(<div>
            <div className="controls">
                <button>Previous</button>
                <button>Play/Pause</button>
                <button>Next</button>
            </div>
            <div className="play w-1/2 m-0">
                <Slider defaultValue={0}/>
            </div>
        </div>
        );
}
export default MusicBar;  