'use client'

import { subscribeNewsletter } from "@/firebase/firebase";
import Link from "next/link";
import { useState } from "react";

import { CiLinkedin } from "react-icons/ci";


export function Footer() {
	const [email, setEmail] = useState("")
	const [subscribeSuccess, setSubscribeSuccess] = useState(null)

	const submitNewsletter = (e) => {
		e.preventDefault()

		if (subscribeNewsletter(email)) {
			setEmail("")
			e.target[0].value = ""
			setSubscribeSuccess(true)
		} else {
			setSubscribeSuccess(false)
		}

	}

	return (
		<footer className="text-white">
			<div className="w-full h-full px-[15%] flex flex-col justify-between gap-5 bg-slate-900 py-[5%]">
				<div className="w-full h-full flex max-md:flex-col justify-between">
					<div className="w-full flex flex-col ">
						<div className="w-full h-fit flex justify-start bg-slate-900 gap-8 pb-16 text-slate-400">

							<div className="flex flex-col gap-1 w-fit min-h-full">
								<p className="text-white">Website</p>
								<Link href="/" className="underline">Home</Link>
								<Link href="/report" className="underline">Report</Link>
							</div>

							<div className="flex flex-col gap-1 w-fit h-full">
								<p className="text-white">Customer Service</p>
								<Link href="mailto:ww414@exeter.ac.uk" className="underline">Contact Us</Link>
							</div>

							<div className="flex flex-col gap-1 w-fit h-full">
								<p className="text-white">More To Explore</p>
								<Link href="https://excs.uk" className="underline">EXCS</Link>
								<Link href="https://hack-south-west.excs.uk" className="underline">HSW</Link>
								<Link href="https://mysoc.uk" className="underline">MySoc</Link>
							</div>
						</div>
					</div>

					<div className="w-full h-full flex flex-col justify-center items-center">
						<div className="flex flex-col justify-center items-start">
							<h1 className="text-2xl font-extrabold">Never Miss Out</h1>
							<p className="font-extralight text-gray-500">Sign up to our newsletter, we will not sell your data, nor email you too often!</p>

							<form className="w-full flex flex-col gap-1" onSubmit={(e) => submitNewsletter(e)}>
								<div>
									<p className="">email address</p>
									<input type="email" placeholder="Enter your email address" className="w-full bg-white text-black p-1" onInput={(e) => e.target.setCustomValidity('')} onChange={(e) => setEmail(e.target.value)} required />
								</div>

								<div className="w-full h-fit flex gap-4">
									<button className="w-fit h-fit bg-primary">
										<p className="px-2 py-1 hover:bg-primary w-full">Sign Up :)</p>
									</button>

									<div className="w-fit min-h-full flex justify-center items-center text-center">
										{
											subscribeSuccess !== null && (
												subscribeSuccess ? (
													<p className="text-green-500">Successfully Subscribed</p>
												) : (
													<p className="text-red-500">Oops Something Went Wrong :(</p>
												)
											)
										}
									</div>


								</div>

							</form>
						</div>
					</div>
				</div>

				<hr className="border-primary bg-none" />

				<div className="w-full h-fit flex justify-between items-center">
					<p className="text-slate-400">@2025 QPlug inc</p>

					{/* <div className="flex gap-1">
						<Link href="https://www.linkedin.com/in/wiktor-inc/" className="underline">
							<CiLinkedin className="w-6 h-6 text-slate-400" />
						</Link>

						<Link href="https://www.linkedin.com/in/wiktor-inc/" className="underline">
							<CiLinkedin className="w-6 h-6 text-slate-400" />
						</Link>
					</div> */}
				</div>
			</div>

			<div className="w-full h-fit bg-slate-800 flex justify-center items-center">
				<Link href="https://www.linkedin.com/in/wiktor-wiejak" target="_blank"><h1>Wiktor Inc</h1></Link>
			</div>
		</footer>

	)
}