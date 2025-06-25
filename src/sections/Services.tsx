import Image from "next/image";
import React from "react";

import invidualSessionImage from "@/assets/services/individual-session.webp";
import studentSessionImage from "@/assets/services/student-session.webp";

import ServicesCard from "@/components/ServicesCard";

const Services = () => {
	return (
		<section className="pt-24" id="services">
			<h1 className="text-4xl text-primary">Services Offered</h1>
			<div className="flex flex-col md:grid md:grid-cols-2  gap-3 pt-6">
				<ServicesCard
					heading="Individual Sessions"
					body="It takes courage to prioritize your mental health. Find support to navigate challenges and unlock your full potential."
				/>
				<Image
					src={invidualSessionImage}
					alt="Image of a man with a headache"
					className="rounded-2xl md:w-full"
				/>
			</div>
			<div className="flex flex-col-reverse  md:grid md:grid-cols-2 gap-3 py-3">
				<Image
					src={studentSessionImage}
					alt="Students studying"
					className="rounded-2xl w-full"
				/>
				<ServicesCard
					heading="Student Counselling"
					body="Navigating student life comes with unique pressures. I offer confidential counselling to help you manage academic stress, social anxieties, career uncertainty, and personal well-being."
				/>
			</div>
		</section>
	);
};

export default Services;
