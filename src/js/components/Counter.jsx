import React from "react";

const Counter = (props) => {
	return (
		<div className="text-center d-flex justify-content-center text-light bg-dark">
			<h1 class="display-1">{Math.floor(props.seconds/10000) % 10}</h1>
			<h1 class="display-1">{Math.floor(props.seconds/1000) % 10}</h1>
			<h1 class="display-1">{Math.floor(props.seconds/100) % 10}</h1>
			<h1 class="display-1">{Math.floor(props.seconds/10) % 10}</h1>
            <h1 class="display-1">{Math.floor(props.seconds) % 10}</h1>
		</div>
		);	
};

export default Counter;