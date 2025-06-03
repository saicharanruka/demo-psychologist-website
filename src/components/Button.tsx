import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
	href,
	body,
	dark,
	className,
}: {
	href: string;
	body: string;
	dark?: boolean;
	className?: string;
}) => {
	return (
		<Link
			href={href}
			className={twMerge(
				` rounded-full p-2 text-primary border border-primary  ${
					dark && "bg-primary text-white"
				}`,
				className
			)}
		>
			{body}
		</Link>
	);
};

export default Button;

{
	/* <Link
key={link.href}
href={link.href}
className="text-sm text-primary font-semibold hover:font-medium hover:scale-105 hover:underline transition duration-300"
>
{link.title}
</Link> */
}
