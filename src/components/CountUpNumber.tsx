// components/CountUpNumber.tsx
"use client";

import { useEffect, useState } from "react";

export default function CountUpNumber({ target = 7, duration = 1 }) {
	const [count, setCount] = useState(1);

	useEffect(() => {
		let start = 0;
		const end = target;
		if (start === end) return;

		const totalDuration = duration * 1000;
		const incrementTime = 30;
		const steps = Math.ceil(totalDuration / incrementTime);
		const stepSize = end / steps;

		const counter = setInterval(() => {
			start += stepSize;
			if (start >= end) {
				clearInterval(counter);
				setCount(end);
			} else {
				setCount(Math.floor(start));
			}
		}, incrementTime);

		return () => clearInterval(counter);
	}, [target, duration]);

	return <span>{count}</span>;
}
