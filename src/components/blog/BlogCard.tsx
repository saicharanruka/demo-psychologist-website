import blogImage from "@/assets/blog/blog.jpg";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
	const currentDate = new Date();

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1; // Add 1 for human-readable month
	const day = currentDate.getDate();
	return (
		<Link href="/blog" className="w-full mx-auto">
			<div className=" flex flex-col items-center md:items-start hover:scale-105 transition ease-in">
				<div className="flex gap-2 text-primary/80 text-sm font-semibold">
					<p>{`${day}/${month}/${year}`}</p>
					<p>|</p>
					<p>5 MIN READ</p>
				</div>

				<h2 className=" text-center md:text-start text-xl uppercase py-2 text-primary font-semibold hover:underline transition ease-in-out">
					5 proven ways to manage anxiety at your workplace
				</h2>

				<Image
					src={blogImage}
					className="h-96 object-cover rounded-xl"
					alt="Blog image"
				/>
			</div>
		</Link>
	);
};

export default BlogCard;
