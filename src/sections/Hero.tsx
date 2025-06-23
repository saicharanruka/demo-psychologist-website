import Image from "next/image";

import heroPicture from "@/assets/hero/hero.webp";
import Button from "@/components/Button";
import HeroCard from "@/components/HeroCard";

import CalenderSvg from "@/assets/calender.svg";
import AffordableSvg from "@/assets/svg/affordable.svg";
import ConfidentialSvg from "@/assets/svg/confidential.svg";
import ClockSvg from "@/assets/svg/clock.svg";
import CountUpNumber from "@/components/CountUpNumber";

const Hero = () => {
	return (
		<section className="pt-3 duration-700 ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				<div className="flex flex-col justify-center px-5 bg-secondary rounded-2xl py-16 md:py-0  motion-preset-slide-up motion-duration-500">
					<h1 className="text-[40px] text-primary font-normal leading-tight ">
						Invest in Your {<br />}Well-being.{<br />}Thrive.
					</h1>
					<p className="text-primary font-medium max-w-lg py-2 leading-tight">
						It takes courage to prioritize your mental health. Find support to
						navigate challenges and unlock your full potential.
					</p>
					<div className="flex gap-2 pt-2">
						<Button
							className=" text-sm px-2 md:text-base font-medium"
							href="/contact"
							body="Book Consultation"
							dark
							arrow={false}
						/>
						<Button
							className="text-sm md:text-base px-3 font-medium"
							href="/blog"
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
			<div className="pt-3 grid gap-4 grid-cols-1 md:grid-cols-4 md:h-28  motion-preset-slide-up motion-duration-1000">
				<HeroCard svg={<CalenderSvg />}>
					<h1 className="text-2xl text-primary font-medium">
						{" "}
						<CountUpNumber />+ Years
					</h1>
					<p className="text-sm text-primary font-medium">
						Practicing Experience
					</p>
				</HeroCard>
				<HeroCard
					heading="Afforable"
					subHeading="Fees"
					svg={<AffordableSvg />}
				/>
				<HeroCard
					heading="100%"
					subHeading="Confidentiality"
					svg={<ConfidentialSvg />}
				>
					<h1 className="text-2xl text-primary font-medium">
						{" "}
						<CountUpNumber target={100} /> %
					</h1>
					<p className="text-sm text-primary font-medium">Confidentiality</p>
				</HeroCard>
				<HeroCard
					heading="Flexible"
					subHeading="In-person & Online session"
					svg={<ClockSvg />}
				/>
				{/* <HeroCard />
				<HeroCard />
				<HeroCard />*/}
			</div>
		</section>
	);
};

export default Hero;
