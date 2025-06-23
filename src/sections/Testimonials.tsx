"use client";
import customerImage from "@/assets/testimonials/customer.webp";
import customerImage2 from "@/assets/testimonials/woman.jpg";
import Image from "next/image";

import ArrowRight from "@/assets/svg/right-arrow.svg";
import ArrowLeft from "@/assets/svg/left-arrow.svg";
import { useState } from "react";

const clientFeedbackData = [
	{
		id: 0,
		name: "Rahul Sharma",
		profession: "Software Engineer",
		image: customerImage,
		testimonial:
			"“I was juggling a demanding job and personal anxieties, and honestly, I felt stuck. Speaking with [Psychologist's Name] helped me gain so much clarity. I've learned to manage stress far better and feel more in control of my life. Highly recommend.”",
	},
	{
		id: 1,
		name: "Sonia Gandhi",
		profession: "Marketing Executive",
		image: customerImage2,
		testimonial:
			"“Speaking with [Psychologist's Name] helped me gain so much clarity. I've learned to manage stress far better and feel more in control of my life. Highly recommend.”",
	},
];

const Testimonials = () => {
	const [curr, setCurr] = useState(clientFeedbackData[0]);

	function nextTestimonial() {
		setCurr(clientFeedbackData[curr.id + 1]);
	}
	function previousTestimonial() {
		setCurr(clientFeedbackData[curr.id - 1]);
	}

	return (
		<section className="pt-24">
			<h1 className="text-4xl font-medium text-primary">
				Client&apos;s Feedback
			</h1>
			<div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-3 px-10 pt-6 transition">
				<Image
					src={curr.image}
					alt="Customer"
					className="rounded-3xl col-span-1 object-center"
					height={300}
					width={300}
				/>
				<div className="flex flex-col justify-between md:col-span-2 rounded-2xl bg-secondary text-primary">
					<div className="p-6">
						<p className="text-primary max-w-sm font-medium">
							{curr.testimonial}
						</p>
					</div>
					<div className="flex justify-between p-6">
						<div className="flex flex-col text-primary font-medium">
							<p className="uppercase font-semibold">{curr.name}</p>
							<p>{curr.profession}</p>
						</div>
						<div className="flex p-6 gap-3 opacity-80">
							<button onClick={previousTestimonial}>
								<ArrowLeft className="size-6 " />
							</button>
							<button onClick={nextTestimonial}>
								<ArrowRight className="size-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
