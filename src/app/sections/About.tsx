import Image from "next/image";
import React from "react";

import facePic from "@/assets/about/shruti.webp";
import Link from "next/link";

const About = () => {
	return (
		<section className="pt-24">
			<h1 className="text-4xl text-primary">Meet Shruti Patnekar</h1>
			<hr className="border border-primary md:w-1/2 my-3" />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-8">
				<div className="flex flex-col justify-center items-start text-primary font-medium">
					<p>
						Based in [Your City/Region], I am a psychologist dedicated to
						promoting mental well-being and challenging stigma in India. I hold
						a [Mention your highest relevant degree, e.g., Master&apos;s degree]
						in Psychology and am committed to providing ethical and effective
						support. In India, practicing psychologists typically hold a
						Master&apos;s degree in Psychology, and further qualifications may
						include an M.Phil. or Ph.D. My approach is empathetic and cliturally
						sensitive, creating a safe space for your personal growth.
					</p>
					<p>
						I provide specialized therapy addressing the following concerns : -
					</p>

					<ul className="list-disc list-outside py-5 pl-10">
						<li>Anxiety and Stress Management</li>
						<li>Depression and Mood Concerns</li>
						<li>Relationship Challenges</li>
						<li>Personal Growth and Self-Esteem</li>
						<li>Trauma and Grief Support</li>
					</ul>
					<Link
						href="/about"
						className="text-primary uppercase underline text-sm font-medium pt-3"
					>
						Know more about me
					</Link>
				</div>
				<div className="p-5">
					<Image
						src={facePic}
						alt="Shruti's face picture"
						className="rounded-2xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
