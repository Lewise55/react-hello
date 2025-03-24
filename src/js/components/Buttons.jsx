import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faRedo } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({ startTimer, stopTimer, resetTimer }) => {
    return (
        <div id="icons" className="icons d-flex justify-content-center">
            <button onClick={() => startTimer()} className="btn btn-light m-2">
                <FontAwesomeIcon icon={faPlay} />
            </button>
            <button onClick={() => stopTimer()} className="btn btn-light m-2">
                <FontAwesomeIcon icon={faStop} />
            </button>
            <button onClick={() => resetTimer()} className="btn btn-light m-2">
                <FontAwesomeIcon icon={faRedo} />
            </button>
        </div>
    );
};

export default Buttons;





