"use client";
import { useState } from "react";
import Button from "../button";

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex flex-col">
			<div>Counter: {counter}</div>
			<div className="flex flex-row gap-4">
				<Button onClick={() => setCounter(counter + 1)}>Increment</Button>
				<Button onClick={() => setCounter(counter > 1 ? counter - 1 : 0)}>
					Decrement
				</Button>
				<Button onClick={() => setCounter(0)}>Reset</Button>
			</div>
		</div>
	);
};

export default Counter;
