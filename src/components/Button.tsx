import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
	href,
	body,
	dark,
	className,
	arrow = true,
}: {
	href: string;
	body: string;
	dark?: boolean;
	className?: string;
	arrow?: boolean;
}) => {
	return (
		<Link
			href={href}
			className={twMerge(
				` rounded-full p-2 group text-primary border border-primary hover:bg-primary hover:text-white transition    ${
					dark && "bg-primary text-white hover:scale-105"
				}`,
				className
			)}
		>
			<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md font-medium px-3">
				<span>{body}</span>
				{arrow && (
					<div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
						>
							<path
								d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
				)}
			</button>
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

<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
	<span>Hover me</span>
	<div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5"
		>
			<path
				d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
				fill="currentColor"
				fill-rule="evenodd"
				clip-rule="evenodd"
			></path>
		</svg>
	</div>
</button>;
