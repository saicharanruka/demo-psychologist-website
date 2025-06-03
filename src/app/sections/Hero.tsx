import Image from "next/image";

import heroPicture from "@/assets/hero/hero.webp";
import Link from "next/link";
import Button from "@/components/Button";

const Hero = () => {
	return (
		<section className="pt-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				<div className="flex flex-col justify-center px-5 bg-secondary rounded-2xl py-16 md:py-0">
					<h1 className="text-[40px] text-primary font-normal leading-tight">
						Invest in Your {<br />}Well-being.{<br />}Thrive.
					</h1>
					<p className="text-primary font-medium max-w-lg py-2 leading-tight">
						It takes courage to prioritize your mental health. Find support to
						navigate challenges and unlock your full potential.
					</p>
					<div className="flex gap-2 pt-2">
						<Button
							className="px-5 font-medium"
							href="/contact"
							body="Book Consultation"
							dark
						/>
						<Button
							className="px-5 font-medium"
							href="/contact"
							body="Check my blog"
						/>
					</div>
				</div>
				<Image
					src={heroPicture}
					alt="Picture of a man looking outside a train through the forest"
					className="rounded-2xl"
				/>
			</div>
			<div></div>
		</section>
	);
};

export default Hero;
