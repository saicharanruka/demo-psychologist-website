"use client";

import Link from "next/link";
import Logo from "@/assets/logo.svg";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLinks, mobileNavLinks } from "@/constants/data";
import Button from "./Button";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="lg:sticky ">
			<div className="flex justify-between border rounded-full p-3 px-3 items-center bg-secondary">
				<div className="flex items-center gap-1">
					<div className="flex items-center justify-start">
						<Logo className="size-6" />
					</div>

					<Link href="/">
						<h4 className="font-medium text-base text-primary">
							Shruti Patnekar
						</h4>
					</Link>
				</div>
				<div className="hidden md:flex justify-center items-center gap-8  ">
					{NavLinks.map((link) => (
						<Link
							href={link.href}
							key={link.title}
							className="text-sm text-primary font-semibold hover:font-medium hover:scale-105 hover:underline transition duration-300"
						>
							{link.title}
						</Link>
					))}
				</div>
				<Button
					href="/"
					body="Book Consultation"
					className="hidden md:flex text-sm font-semibold"
				/>
				{/* <Link
					href="/contact"
					className="hidden md:flex rounded-full bg-transparent border-primary border text-primary p-2 px-2 font-semibold text-sm"
				>
					Book Consultation
				</Link> */}
				<div className="justify-end flex gap-4 md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-menu "
						onClick={() => setIsOpen(!isOpen)}
					>
						<line
							x1="3"
							y1="6"
							x2="21"
							y2="6"
							className={`origin-left transition ${
								isOpen && "rotate-45 -translate-y-1"
							}`}
						></line>
						<line
							x1="3"
							y1="12"
							x2="21"
							y2="12"
							className={`transition ${isOpen && "opacity-0"}`}
						></line>
						<line
							x1="3"
							y1="18"
							x2="21"
							y2="18"
							className={`transition origin-left ${
								isOpen && "-rotate-45 translate-y-1"
							}`}
						></line>
					</svg>
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
						className="overflow-hidden"
					>
						<div className="flex flex-col items-center gap-4 py-4">
							{mobileNavLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-primary font-semibold hover:font-medium hover:scale-105 hover:underline transition duration-300"
								>
									{link.title}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default NavBar;
