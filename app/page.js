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

	const sections = useRef([]);

	useEffect(() => {
		const current = sections.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log(`${entry.target.id} is now in view`);
						let universityContainer = document.getElementById("university-container");

						if (entry.target.id === "page-2") {
							universityContainer.classList.remove("hidden");
							universityContainer.classList.toggle("fade-in-container");
						} else {
							universityContainer.classList.add("hidden");
							universityContainer.classList.toggle("fade-in-container");
						}
					}
				});
			},
			{
				threshold: 0.8, // Trigger when 70% of the element is visible
			}
		);


		sections.current.forEach((section) => observer.observe(section));

		return () => {
			current.forEach((section) => {
				if (section) {
					observer.unobserve(section)
				}
			})
		};
	}, []);

	return (

		// snap-mandatory snap-y overflow-scroll
		<div className="w-full h-fit flex flex-col justify-start items-center no-scrollbar scroll-smooth">
			<div className="snap-always snap-center flex-shrink-0 flex flex-col justify-center items-center w-full h-screen px-[15%]" id="page-1" ref={(el) => (sections.current[0] = el)}>
				<div className="flex justify-center items-center w-full h-full">
					<div className="w-1/3">
						<Image src="/plug.avif" width={500} height={500} className="w-full h-fit object-contain top-0 left-0" alt="a" />
					</div>

					<div className="w-1/2">
						<h1 className="text-8xl font-extrabold">Study <span className="text-primary">more</span></h1>
						<h1 className="text-8xl font-extrabold pl-16"><span className="text-accent">worry</span> less</h1>
					</div>
				</div>


				<div className="place-self-end self-center pb-4 animate-pulse">
					<p className="text-sm font-extralight flex justify-center items-center gap-1">Find out more <MdExpandMore /></p>
				</div>
			</div>

			<div className="snap-always snap-center flex-shrink-0 flex gap-16 justify-center items-center w-full h-screen px-[15%]" id="page-2" ref={(el) => (sections.current[1] = el)}>
				<div className="w-1/2 flex flex-col justify-center items-start">
					<div id="university-container" className="*:fade-in-container w-full h-full">
						<h1 className="text-4xl pb-8 font-bold animate-appear">Our partnering universities</h1>
						<div className="w-full grid h-fit grid-cols-3 gap-4 fade-in-container animate-appear" >
							{
								[1, 2, 3, 4, 5].map((uni, index) => {
									return (
										<div key={index} className="w-full aspect-square bg-slate-100 rounded-3xl flex justify-center items-center shadow-lg hover:-translate-y-2 cursor-pointer transition-all duration-200">

										</div>
									)
								})
							}
						</div>
					</div>
				</div>

				<div className="w-1/2 flex justify-center items-center">
					<UniversityMap />
				</div>
			</div>

			<div className="snap-center flex-shrink-0 w-full h-screen">
				<div className="w-full h-1/2 flex gap-16 bg-primary px-[15%] pt-32 pb-16">

					<div className="w-full flex justify-center items-center">
						<Image src="/cats/smt.png" className="" width={200} height={200} alt="?" />
					</div>

					<div className="w-full">
						<p className="text-6xl font-extrabold">Our</p>
						<p className="text-6xl font-extrabold pl-12">Mission</p>
						<p className="text-md font-extralight text-wrap pt-4">The aim of this project is to improve student experience at no extra cost, I hope that more projects like this come up taking advantage of many free resources that us students receive but dont take advantage of.</p>
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
						<p className="text-center">This is not only just a plug socket finding app, its a movement to encourage like minded people to <span className="font-extrabold text-primary">just do it</span>!</p>
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


			<div className="snap-center flex flex-shrink-0 w-full h-screen">

				{/* key events panel */}
				<div className="min-w-1/4 h-full border-r-accent shadow-md shadow-accent">

				</div>

				<div className="w-full h-full flex flex-start items-center p-8">
					<p>This is in the center</p>

				</div>
			</div>

			<div className="snap-center flex-shrink-0 w-full h-full">
				<div className="w-full h-1/2 flex gap-16 bg-primary px-[15%] pt-32 pb-16">
					<div className="w-full">
						<p className="text-6xl font-extrabold">Questions &</p>
						<p className="text-6xl font-extrabold pl-12">Answers</p>
						<p className="text-md font-extralight text-wrap pt-4">Have questions? Here you&apos;ll find all the answers to your questions. If there is something missing feel free to reach out to us with absolutely any queries via our email.</p>
					</div>

					<div className="w-full flex justify-center items-center">
						<Image src="/cats/tux.png" className="" width={200} height={200} alt="?" />
					</div>
				</div>

				<div className="w-full h-1/2 flex justify-between px-[15%] pt-32 pb-16">
					<div className="w-fit flex flex-col">
						<Link href="/" className="text-accent font-semibold text-xl underline">Home</Link>
						<Link href="/rooms" className="text-accent font-semibold text-xl underline">Rooms</Link>
						<Link href="/profile" className="text-accent font-semibold text-xl underline">Contact</Link>
						<Link href="/legal" className="text-accent font-semibold text-xl underline">Legal</Link>
					</div>

					<div className="w-2/3 h-fit flex flex-col justify-center">
						<p className="text-2xl text-text font-extrabold pb-4">Questions</p>
						{
							questions.map((question, index) => {
								return (
									<div key={index} className="flex justify-between w-full pl-4">
										<div className="border-black border-b-[1px] flex w-full justify-between">
											<p>{question.question}</p>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}