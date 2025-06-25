"use client";

import { type testimonialsType } from "@/sections/Testimonials";
import { motion } from "motion/react";
import { Fragment } from "react";

const Scroller = (props: {
	testimonials: testimonialsType;
	className?: string;
}) => {
	const { testimonials, className } = props;

	return (
		<motion.div
			initial={{ x: 0 }}
			animate={{ x: "-50%" }}
			transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
			className={`flex gap-3 pb-4 ${className || ""}`}
		>
			{Array.from({ length: 3 }).map((_, i) => (
				<Fragment key={i}>
					{testimonials.map((element, idx) => (
						<div
							key={idx}
							className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
						>
							<h3 className="text-3xl text-center mt-6">{element.title}</h3>
							<p className="text-center text-white/50 mt-2">{element.body}</p>
						</div>
					))}
				</Fragment>
			))}
		</motion.div>
	);
};

export default Scroller;
