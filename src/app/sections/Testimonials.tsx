import customerImage from "@/assets/testimonials/customer.webp";
import Image from "next/image";

const Testimonials = () => {
	return (
		<section className="pt-24">
			<h1 className="text-4xl font-medium text-primary">
				Client&apos;s Feedback
			</h1>
			<div className="grid grid-cols-3 px-10 pt-5">
				<Image
					src={customerImage}
					alt="Customer"
					className="rounded-3xl col-span-1"
				/>
				<div className="col-span-2 rounded-2xl bg-secondary text-primary"></div>
			</div>
		</section>
	);
};

export default Testimonials;
