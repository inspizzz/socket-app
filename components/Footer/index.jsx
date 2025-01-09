'use client'

import Link from "next/link";

import { CiLinkedin } from "react-icons/ci";
import { Button1 } from "../General/Buttons/Button1";


export function Footer() {
	return (
		<footer className="text-white">
			<div className="w-full h-full px-[15%] flex justify-between bg-slate-900 py-[5%]">



				<div className="w-full flex flex-col">
					<div className="w-full h-fit flex justify-center bg-slate-900 gap-8 pb-16 text-slate-400">

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

					{/* <h1 className="text-6xl font-bold pl-8"><span className="text-accent">Q</span><span className="text-secondary">Plug</span></h1> */}

					<div className="w-full h-fit flex justify-center gap-8 pb-16 text-slate-400">
						<Link href="https://linkedin.com/in/wiktor-wiejak" className="border rounded-full w-8 h-8 flex justify-center items-center p-1"><CiLinkedin className="w-full h-full" /></Link>
						<Link href="https://linkedin.com/in/wiktor-wiejak" className="border rounded-full w-8 h-8 flex justify-center items-center p-1"><CiLinkedin className="w-full h-full" /></Link>
						<Link href="https://linkedin.com/in/wiktor-wiejak" className="border rounded-full w-8 h-8 flex justify-center items-center p-1"><CiLinkedin className="w-full h-full" /></Link>
						<Link href="https://linkedin.com/in/wiktor-wiejak" className="border rounded-full w-8 h-8 flex justify-center items-center p-1"><CiLinkedin className="w-full h-full" /></Link>
					</div>


				</div>

				<div className="w-full h-full flex flex-col justify-center items-center">
					<div className="flex flex-col justify-center items-start">
						<h1 className="text-2xl font-extrabold">Don&apos;t Miss Out</h1>
						<p className="font-extralight text-gray-500">Sign up to our newsletter to keep up to date with updates and changes, we will not try and sell anything to you or sell your data!</p>

						<form className="w-full flex flex-col gap-1" onSubmit={(e) => e.preventDefault()}>
							<div>
								<p className="">email address</p>
								<input type="email" placeholder="Enter your email address" className="w-full bg-white text-black p-1" required />
							</div>

							<Button1 callback={console.log("click")} >
								<p className="px-2 py-1 hover:bg-primary w-full">Sign Up :)</p>
							</Button1>

						</form>
					</div>
				</div>
			</div>

			{/* <hr /> */}


			<div className="w-full h-fit bg-slate-800 flex justify-center items-center">
				<h1>Wiktor Inc</h1>
			</div>
		</footer>

	)
}