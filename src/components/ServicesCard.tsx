import React from "react";
import Button from "@/components/Button";

const ServicesCard = () => {
	return (
		<div className="bg-secondary rounded-2xl flex  flex-col gap-5 md:gap-0">
			<div className="p-2 flex justify-end items-center">
				<Button
					href="/services"
					body="Learn More"
					dark
					className="text-sm font-medium px-6 m-1"
				/>
			</div>
			<div className="flex flex-col gap-2 justify-center h-full p-3 pb-10 md:pb-0">
				<h1 className="text-4xl font-medium uppercase text-primary max-w-[200px]">
					Individual Sessions
				</h1>
				<p className="text-primary font-medium text-sm">
					It takes courage to prioritize your mental health. Find support to
					navigate challenges and unlock your full potential.
				</p>
			</div>
		</div>
	);
};

export default ServicesCard;
