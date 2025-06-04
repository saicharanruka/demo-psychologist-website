import About from "../sections/About";
import FAQs from "../sections/FAQs";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<FAQs />
			<Testimonials />
		</>
	);
}
