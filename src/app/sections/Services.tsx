import Image from "next/image";
import React from "react";

import invidualSessionImage from "@/assets/services/individual-session.webp";
import studentSessionImage from "@/assets/services/student-session.webp";

import ServicesCard from "@/components/ServicesCard";

const Services = () => {
	return (
		<section className="pt-24">
			<h1 className="text-4xl text-primary">My Services</h1>
			<div className="flex flex-col md:flex-row gap-3 pt-6">
				<ServicesCard />
				<Image
					src={invidualSessionImage}
					alt="Image of a man with a headache"
					className="rounded-2xl md:w-full"
				/>
			</div>
			<div className="flex flex-col-reverse md:flex-row gap-3 py-3">
				<Image
					src={studentSessionImage}
					alt="Students studying"
					className="rounded-2xl w-full"
				/>
				<ServicesCard />
			</div>
		</section>
	);
};

export default Services;
