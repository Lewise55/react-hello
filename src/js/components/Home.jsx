import React, {useState} from "react";
import Counter from "./Counter";

const Home = () => {
	let [seconds, setSeconds] = useState(0)
		setInterval(() => {
			console.log(seconds, "first");
			setSeconds(seconds++)
			console.log(seconds, "seconds");			
		}, 1000)

	return (
		<div className="text-center">
			<Counter seconds={seconds} />
		</div>
	);
};

export default Home;