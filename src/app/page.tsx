import About from "./sections/About";
import FAQs from "./sections/FAQs";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<FAQs />
		</>
	);
}
