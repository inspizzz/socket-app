'use client'

import { UniversityMap } from "@/components/UniversityMap";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaBullseye, FaRegEye } from "react-icons/fa6";


import { MdExpandMore, MdOutlinePrivacyTip } from "react-icons/md";


export default function Home() {
	const questions = [
		{
			question: "How can QPlug help you?",
			answer: "something something something..."
		},
		{
			question: "How can QPlug help you?",
			answer: "something something something..."
		},
		{
			question: "How can QPlug help you?",
			answer: "something something something..."
		},
		{
			question: "How can QPlug help you?",
			answer: "something something something..."
		},
	]

	return (

		// snap-mandatory snap-y overflow-scroll
		<div className="w-full h-fit flex flex-col justify-start items-center no-scrollbar scroll-smooth">
			<div className="flex flex-col justify-center items-center w-full h-screen px-[15%]" id="page-1">
				<div className="flex justify-center items-center w-full h-full">
					<div className="w-1/3">
						<Image src="/plug.avif" width={500} height={500} className="w-full h-fit object-contain top-0 left-0" alt="a" />
					</div>

					<div className="w-1/2 flex flex-col gap-8 max-md:gap-2">
						<div>
							<h1 className="text-8xl max-md:text-2xl font-extrabold">Study <span className="text-primary">more</span></h1>
							<h1 className="text-8xl max-md:text-2xl font-extrabold pl-16 max-md:pl-8 text-nowrap"><span className="text-accent">worry</span> less</h1>
						</div>

						<button className="w-fit h-fit px-4 py-2 bg-primary rounded-full text-2xl max-md:text-sm font-extrabold text-white hover:animate-pulse">Scan me!</button>
					</div>
				</div>


				{/* <div className="place-self-end self-center pb-4 animate-pulse">
					<p className="text-sm font-extralight flex justify-center items-center gap-1">Find out more <MdExpandMore /></p>
				</div> */}
			</div>

			<div className="w-full h-screen">
				<div className="w-full h-1/2 flex gap-16 bg-primary px-[15%] pt-32 pb-16">

					<div className="w-full flex justify-center items-center">
						<Image src="/cats/smt.png" className="" width={200} height={200} alt="?" />
					</div>

					<div className="w-full">
						<p className="text-6xl font-extrabold">Our</p>
						<p className="text-6xl font-extrabold pl-12">Mission</p>
						<p className="text-md font-extralight text-wrap pt-4">The aim of this project is to improve student experience at no extra cost, we acted on the voice of many students complaints about broken plug sockets found around common study spots on campus! This application will help you take control and make a difference to everyones experience by reporting these :)</p>
							
							{/* I hope that more projects like this come up taking advantage of many free resources that us students receive but dont take advantage of.</p> */}
					</div>
				</div>

				<div className="w-full h-1/2 flex items-center gap-16 px-[15%]">
					<div className="flex flex-col items-center min-h-60">
						<MdOutlinePrivacyTip className="w-16 h-16" />
						<p>Privacy</p>
						<hr className="w-full" />
						<p className="text-center">We value your privacy, and dont really fancy stealing your cookies! There is no login either, so you are 100% safe on our website!</p>
					</div>


					<hr />

					<div className="flex flex-col items-center min-h-60">
						<FaRegEye className="w-16 h-16" />
						<p>Vision</p>
						<hr className="w-full" />
						<p className="text-center">This is not only just a faulty plug socket reporting app, its a movement to encourage like minded people to <span className="font-extrabold text-primary">just do it</span>!</p>
					</div>

					<hr />

					<div className="flex flex-col items-center min-h-60">
						<FaBullseye className="w-16 h-16" />
						<p>Outcome</p>
						<hr className="w-full" />
						<p className="text-center">We aim to help both students and university staff with identifying faulty plug sockets using this platform as a means for open communication about this issue.</p>
					</div>
				</div>
			</div>
		</div>
	)
}