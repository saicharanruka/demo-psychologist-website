"use client";
import PlusCircle from "@/assets/svg/plus-circle.svg";

const faqs = [
	{
		question: "Is therapy covered by health insurance in India?",
		answer:
			" Yes, generally, mental health treatments are now covered by health insurance policies in India, similar to physical illnesses. This is a positive change thanks to regulations by the IRDAI and the Mental Healthcare Act of 2017. However, the extent of coverage can vary greatly between different insurance providers and specific plans.",
	},
	{
		question: "What about confidentiality? Will what I share be kept private?",
		answer:
			"Your privacy is paramount. Everything you discuss in therapy is strictly confidential. This means I will not share any information about our sessions with anyone – your family, friends, or educational institution – without your explicit written consent. The only exceptions are specific legal or ethical situations",
	},
	{
		question: "What are my payment options?",
		answer:
			"We aim to make the payment process as convenient as possible for you. We accept payments through various digital modes, including popular UPI platforms like Google Pay, PhonePe, and Paytm. Bank transfers are also an accepted method.",
	},
	{
		question: "What happens if I need to cancel or reschedule an appointment?",
		answer:
			"We understand that unforeseen circumstances can arise. If you need to cancel or reschedule your appointment, we kindly request that you notify us at least 24 hours in advance. This allows us to offer the slot to another client who may be in need of support. ",
	},
];

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const FAQs = () => {
	const [selectedIndex, setSelectedIndex] = useState(1);
	return (
		<section className="pt-24">
			<div className="grid grid-cols-1 md:grid-cols-2">
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
								<PlusCircle
									className={`text-primary flex-shrink-0 transition duration-300 size-8 ${
										selectedIndex === faqIndex && "rotate-45"
									}`}
								/>
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
{
	/* <svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	strokeWidth="2"
	strokeLinecap="round"
	strokeLinejoin="round"
	className={`text-primary flex-shrink-0 transition duration-300 border border-primary rounded-full ${
		selectedIndex === faqIndex && "rotate-45"
	}`}
>
	<line x1="12" y1="5" x2="12" y2="19"></line>
	<line x1="5" y1="12" x2="19" y2="12"></line>
</svg>; */
}
