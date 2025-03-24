import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


const Counter = (props) => {	
	return (
		<div className="text-center d-flex justify-content-center text-light bg-dark">
			<div className="timer d-flex">
				<h1 className="img">
					<FontAwesomeIcon icon={faClock} size="lg" />
				</h1>
				<h1 ClassName="hours">{Math.floor(props.seconds/3600)}</h1>
				<h1 ClassName="minutes">{Math.floor((props.seconds/60) % 60)}</h1>
				<h1 ClassName="seconds">{Math.floor(props.seconds%60)}</h1>
			</div>
		</div>
		);	
		
};

export default Counter;

