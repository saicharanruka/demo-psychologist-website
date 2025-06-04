import featuredImage from "@/assets/blog/featured.jpg";
import DottedRightArrow from "@/assets/blog/DottedRight.svg";

import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";

export default function Blog() {
	return (
		<section className="pt-8">
			<h1 className="text-4xl text-primary font-medium">Blog</h1>
			<Link href="/blog" className="group">
				<div
					className="mt-4 h-96 w-full  bg-cover bg-center rounded-2xl relative z-0 group-hover:scale-105 transition"
					style={{ backgroundImage: `url(${featuredImage.src})` }}
				>
					<div className="rounded-2xl absolute inset-0 bg-black/40 md:bg-black/20 -z-10  " />
					<div className="flex h-full w-full">
						<div className="p-4 md:p-12 flex flex-col justify-end h-full w-3/4 text-white z-10 font-medium ">
							<p className="">Featured</p>
							<h2 className="text-2xl py-3">
								5 Proven Ways to manage anxiety at your workplace
							</h2>
							<p className="text-sm max-w-md">
								Feeling that familiar knot of anxiety tightening when you think
								about your workday? You&apos;re not alone – workplace stress is
								a reality for many, especially in India&apos;s fast-paced
								environment.
							</p>
						</div>

						<div className="flex items-end p-6">
							<DottedRightArrow className="z-10 size-10 md:size-24 group-hover:scale-125 group-hover:-rotate-45 transition" />
						</div>
					</div>
				</div>
			</Link>
			<div className="pt-12 ">
				<h2 className="capitalize text-2xl text-primary font-medium">
					Recent blog posts
				</h2>
				<hr className="border my-2 border-primary" />
				<div className="pt-4 grid grid-cols-1  md:grid-cols-4 gap-16 md:gap-5">
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		</section>
	);
}
