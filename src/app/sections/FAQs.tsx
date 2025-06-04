"use client";

const faqs = [
	{
		question: "What makes Re:Fit's 24/7 access truly secure and convenient?",
		answer:
			" Our 24/7 access is facilitated by a secure, key-fob entry system, ensuring only active members can enter. Inside, we have comprehensive CCTV surveillance and emergency call buttons strategically placed for your safety and peace of mind during unstaffed hours.",
	},
	{
		question:
			"How does Re:Fit support members who are new to fitness or feeling intimidated?",
		answer:
			"We pride ourselves on a welcoming atmosphere. For newcomers, we offer a complimentary orientation session with a trainer to demonstrate equipment usage and basic exercises. Our 'Re:Start Pack' also includes a personal consultation, specifically designed to help you build confidence and get comfortable in the gym environment.",
	},
	{
		question: "Can I try out Re:Fit before committing to a membership?",
		answer:
			"bsolutely! We offer a one-day guest pass so you can experience our facility, equipment, and atmosphere firsthand. Simply visit during staffed hours to sign up for your complimentary trial.",
	},
	{
		question:
			"Does Re:Fit offer any specialized classes or workshops beyond standard group fitness?",
		answer:
			"Yes, in addition to our regular group fitness schedule, Re:Fit frequently hosts specialized workshops on topics like nutrition, advanced lifting techniques, flexibility, and mindfulness. Check our in-gym notice board or social media for upcoming events and registration details.",
	},
	{
		question:
			"What measures does Re:Fit take to maintain cleanliness and hygiene, especially with 24/7 access?",
		answer:
			" We maintain rigorous cleaning protocols throughout the day, with dedicated staff during staffed hours and professional cleaning crews during off-peak times. We also provide ample sanitizing stations and disinfectant wipes throughout the gym for members to clean equipment before and after use, ensuring a hygienic environment for everyone.",
	},
];

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const FAQs = () => {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	return (
		<section className="pt-24">
			<div className="grid grid-cols-2">
				<div>
					<h1 className="text-3xl max-w-sm text-primary font-medium capitalize">
						Frequently Asked Questions
					</h1>
				</div>
				<div className="mt-12 flex flex-col gap-6 max-w-2xl mx-auto">
					{faqs.map((faq, faqIndex) => (
						<div
							key={faq.question}
							className="bg-transparent border-b-primary border-2 border-transparent p-6"
						>
							<div
								className="flex justify-between items-center"
								onClick={() => setSelectedIndex(faqIndex)}
							>
								<h3 className="font-medium text-lg text-primary">
									{faq.question}
								</h3>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className={`text-primary flex-shrink-0 transition duration-300 border-2 rounded-full ${
										selectedIndex === faqIndex && "rotate-45"
									}`}
								>
									<line x1="12" y1="5" x2="12" y2="19"></line>
									<line x1="5" y1="12" x2="19" y2="12"></line>
								</svg>
							</div>
							<AnimatePresence>
								{selectedIndex === faqIndex && (
									<motion.div
										initial={{ height: 0, marginTop: 0 }}
										animate={{ height: "auto", marginTop: 24 }}
										exit={{ height: 0, marginTop: 0 }}
										className={`overflow-hidden`}
									>
										<p className="text-primary/80">{faq.answer}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQs;
