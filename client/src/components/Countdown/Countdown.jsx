import React, { useState, useEffect } from "react";
import "./Countdown.css";

const COUNTDOWN_TARGET = new Date("2023-10-14T11:00:00");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = {label: "dní", value: Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))}
	const hours = {label: "hodin", value:Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)}
	const minutes = {label: "minut", value:Math.floor((totalTimeLeft / (1000 * 60)) % 60)}
	const seconds = {label: "sekund", value:Math.floor((totalTimeLeft / 1000) % 60)}
	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='countdown'>
			<div className='content'>
				{Object.entries(timeLeft).map((el) => {
					const label = el[1]["label"];
					const value = el[1]["value"];

					return (
						<div className='box' key={label}>
							<div className='value'>
								<span>{value}</span>
							</div>
							<span className='label'> {label} </span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Countdown;