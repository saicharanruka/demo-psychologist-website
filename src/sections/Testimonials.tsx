import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const patientFeedback = [
	{
		title: "Truly Life-Changing",
		body: "What can I say? I feel truly blessed to have found Shruti. After 7 years of marriage, we became parents to a beautiful daughter, and their support through that journey was incredible. The entire team was so kind and helpful. This has been a life-changing experience for us.",
	},
	{
		title: "Gained Clarity and Calm",
		body: "I came in feeling overwhelmed and scattered, struggling with daily stress. The sessions here helped me gain so much clarity. I've learned practical ways to manage my thoughts and emotions, and I feel a profound sense of calm that I hadn't experienced in years. It's been incredibly empowering.",
	},
	{
		title: "A Safe and Understanding Space",
		body: "It's hard to put into words how much the support here has meant to me. I finally found a safe, non-judgmental space to talk about things I'd kept hidden for years. The understanding and guidance I received were instrumental in helping me navigate a very difficult period in my life.",
	},
	{
		title: "Improved Relationships",
		body: "Our family dynamics were quite strained, and we were struggling to communicate effectively. Through family therapy, we've learned to listen, understand, and connect on a much deeper level. The improvement in our relationships is remarkable, and we're truly grateful for the guidance provided.",
	},
	{
		title: "Found My Strength",
		body: "I never thought I'd seek therapy, but I'm so glad I did. It wasn't about being 'sick,' but about finding my own strength. I've developed healthier coping mechanisms and a better understanding of myself. It's been a journey of self-discovery, and I feel much more resilient now.",
	},
	{
		title: "Professional and Compassionate",
		body: "From the very first session, I felt heard and respected. The approach was professional yet deeply compassionate. I appreciated the practical strategies and insights shared, which have helped me overcome significant challenges and improve my overall well-being. Highly recommend their expertise.",
	},
];

export type testimonialsType = typeof patientFeedback;

const Testimonials = () => {
	return (
		<section className="pt-24">
			<h1 className="text-4xl font-medium text-primary">Stories of Hope</h1>
			<div className="pt-4">
				<InfiniteMovingCards items={patientFeedback} />
			</div>
		</section>
	);
};

export default Testimonials;
