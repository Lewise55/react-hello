import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


const Icon = (props) => {
    return (
        <div className="text-center d-flex justify-content-center text-light bg-dark">
            <div className="timer d-flex">
                <h1 className="img"><i class="fa-regular fa-clock fa-lg"></i></h1>
                
            </div>
            
        </div>
        );	
};

export default Icon;