'use client'

import Link from "next/link";

import { CiLinkedin } from "react-icons/ci";


export function Footer() {
	return (
		<footer className="text-white">
			<div className="w-full h-full px-[15%] flex flex-col justify-between gap-5 bg-slate-900 py-[5%]">
				<div className="w-full h-full flex justify-between">
					<div className="w-full flex flex-col ">
						<div className="w-full h-fit flex justify-start bg-slate-900 gap-8 pb-16 text-slate-400">

							<div className="flex flex-col gap-1 w-fit min-h-full">
								<p className="text-white">Website</p>
								<Link href="/" className="underline">Home</Link>
							</div>

							<div className="flex flex-col gap-1 w-fit h-full">
								<p className="text-white">Customer Service</p>
								<Link href="/about" className="underline">About</Link>
								<Link href="/contact" className="underline">Contact Us</Link>
								<Link href="/legal" className="underline">Legal</Link>
							</div>

							<div className="flex flex-col gap-1 w-fit h-full">
								<p className="text-white">More To Explore</p>
								<Link href="https://excs.uk" className="underline">Exeter Computer Science Society</Link>
								<Link href="https://hack-south-west.excs.uk" className="underline">Hack South West</Link>
								<Link href="https://mysoc.uk" className="underline">MySoc</Link>
							</div>
						</div>
					</div>

					<div className="w-full h-full flex flex-col justify-center items-center">
						<div className="flex flex-col justify-center items-start">
							<h1 className="text-2xl font-extrabold">Never Miss Out</h1>
							<p className="font-extralight text-gray-500">Sign up to our newsletter to keep up to date with updates and changes, we will not try and sell anything to you or sell your data!</p>

							<form className="w-full flex flex-col gap-1" onSubmit={(e) => e.preventDefault()}>
								<div>
									<p className="">email address</p>
									<input type="email" placeholder="Enter your email address" className="w-full bg-white text-black p-1" required />
								</div>

								<button className="w-1/4 h-fit bg-primary">
									<p className="px-2 py-1 hover:bg-primary w-full">Sign Up :)</p>
								</button>

							</form>
						</div>
					</div>
				</div>

				<hr className="border-primary bg-none"/>

				<div className="w-full h-fit flex justify-between items-center">
					<p className="text-slate-400">@2025 QPlug inc</p>

					<div className="flex gap-1">
						<Link href="https://www.linkedin.com/in/wiktor-inc/" className="underline">
							<CiLinkedin className="w-6 h-6 text-slate-400" />
						</Link>

						<Link href="https://www.linkedin.com/in/wiktor-inc/" className="underline">
							<CiLinkedin className="w-6 h-6 text-slate-400" />
						</Link>
					</div>
				</div>
			</div>

			<div className="w-full h-fit bg-slate-800 flex justify-center items-center">
				<h1>Wiktor Inc</h1>
			</div>
		</footer>

	)
}