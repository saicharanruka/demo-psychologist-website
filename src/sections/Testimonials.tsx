"use client";

import customerImage from "@/assets/testimonials/customer.webp";
import Image from "next/image";

import ArrowRight from "@/assets/svg/right-arrow.svg";
import ArrowLeft from "@/assets/svg/left-arrow.svg";

const Testimonials = () => {
	return (
		<section className="pt-24">
			<h1 className="text-4xl font-medium text-primary">
				Client&apos;s Feedback
			</h1>
			<div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-3 px-10 pt-6">
				<Image
					src={customerImage}
					alt="Customer"
					className="rounded-3xl col-span-1"
				/>
				<div className="flex flex-col justify-between md:col-span-2 rounded-2xl bg-secondary text-primary">
					<div className="p-6">
						<p className="text-primary max-w-sm font-medium">
							“I was juggling a demanding job and personal anxieties, and
							honestly, I felt stuck. Speaking with [Psychologist&apos;s Name]
							helped me gain so much clarity. I&apos;ve learned to manage stress
							far better and feel more in control of my life. Highly recommend.”
						</p>
					</div>
					<div className="flex justify-between p-6">
						<div className="flex flex-col text-primary font-medium">
							<p className="uppercase font-semibold">Rahul Sharma</p>
							<p>Software Engineer</p>
						</div>
						<div className="flex p-6 gap-3 opacity-80">
							<button>
								<ArrowLeft className="size-6 " />
							</button>
							<button>
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
