import React, { ReactElement } from "react";

const HeroCard = ({
	heading,
	subHeading,
	svg,
	children,
}: {
	heading?: string;
	subHeading?: string;
	svg: ReactElement;
	children?: React.ReactNode;
}) => {
	return (
		<div className="h-28 rounded-2xl bg-secondary w-full">
			<div className="flex w-full justify-end p-1">{svg}</div>
			{!children && (
				<div className="pl-3">
					<h4 className="text-2xl text-primary font-medium">{heading}</h4>
					<p className="text-sm text-primary font-medium">{subHeading}</p>
				</div>
			)}
			<div className="pl-6">{children}</div>
		</div>
	);
};

export default HeroCard;
