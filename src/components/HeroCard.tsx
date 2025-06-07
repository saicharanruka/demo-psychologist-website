import React from "react";

import CalenderSvg from "@/assets/calender.svg";

const HeroCard = () => {
	return (
		<div className="h-28 rounded-2xl bg-secondary w-full">
			<div className="flex w-full justify-end p-1">
				<CalenderSvg />
			</div>
			<div className="pl-3">
				<h4 className="text-2xl text-primary font-medium">7+ Years</h4>
				<p className="text-sm text-primary font-medium">
					Practicing Experience
				</p>
			</div>
		</div>
	);
};

export default HeroCard;
