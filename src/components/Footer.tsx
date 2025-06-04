import Link from "next/link";

const Footer = () => {
	return (
		<footer className="mt-24 sticky top-[100vh] bg-gray-950 text-white/60 font-medium">
			<div className="flex flex-col gap-16 md:flex-row justify-between py-20 px-24">
				<div className="flex flex-col gap-3">
					<h4 className="uppercase text-white">Contact</h4>
					<div className="max-w-xs flex flex-col">
						<p>123 Street, New Delhi, India</p>
						<p>+988888888</p>
						<p>hello@shrutipatnekar.com</p>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="uppercase text-white">Quick Links</h4>
					<div className="max-w-xs flex flex-col">
						<Link href="/about">About Me</Link>
						<Link href="/services">Services</Link>
						<Link href="/blog">Blog</Link>
						<Link href="/contact">Contact</Link>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="uppercase text-white">Social</h4>
					<div className="max-w-xs flex flex-col">
						<Link target="_blank" href="https://facebook.com">
							Facebook
						</Link>
						<Link target="_blank" href="https://x.com">
							X(Twitter)
						</Link>
						<Link target="_blank" href="https://linkedin.com">
							LinkedIn
						</Link>
						<Link target="_blank" href="https://instagram.com">
							Instagram
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="uppercase text-white">Legal</h4>
					<div className="max-w-xs flex flex-col">
						<Link href="/">Terms & Conditions</Link>
						<Link href="/">Privacy Policy</Link>
					</div>
				</div>
			</div>
			<p className="px-12">@{new Date().getFullYear()}. ALL RIGHTS RESERVED</p>
		</footer>
	);
};

export default Footer;
