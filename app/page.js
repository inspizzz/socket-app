import { Button1 } from "@/components/General/Buttons/Button1";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa";
import { UniversityMap } from "@/components/UniversityMap";



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
		<div className="w-full h-fit min-h-screen">
			<div className="w-full h-[80vh] flex gap-32 justify-center items-center px-[15%]">

				<div className="w-1/2">
					<Image src="/plug.avif" width={500} height={500} className="w-full h-fit object-contain top-0 left-0" alt="a" />
				</div>

				<div className="w-1/2">
					<h1 className="text-6xl font-bold">Welcome to </h1>
					<h1 className="text-6xl font-bold pl-8"><span className="text-accent">Q</span><span className="text-secondary">Plug</span></h1>
					<p className="text-md font-extralight">Dont let plugs get in the way of your studies!</p>


					<Button1><a>Get Started</a></Button1>

				</div>
			</div>


			{/* some stats in 3 boxes */}
			{/* <div className="w-full h-screen flex flex-col justify-center items-start gap-4 flex-auto px-[15%]">

				<h1 className="text-4xl font-extrabold border-slate-500 border-b-2">Its as easy as ...</h1>

				<div className="w-full h-fit flex justify-center items-center gap-8">
					<div className="p-8 rounded-3xl bg-primary aspect-square w-full h-full flex flex-col hover:-translate-y-4 transition-all duration-100 cursor-pointer">
						<h1 className="text-2xl font-extrabold">Select a room</h1>
						<Image src="/room.png" width={500} height={500} className="object-contain w-full h-full min-h-72" alt="a" />
					</div>

					<div className="p-8 rounded-3xl bg-secondary aspect-square w-full h-fit flex flex-col hover:-translate-y-4 transition-all duration-100 cursor-pointer">
						<h1 className="text-2xl font-extrabold">Scan a qr code</h1>
						<Image src="/scan.png" width={500} height={500} className="object-contain w-full h-full min-h-72" alt="a" />
					</div>

					<div className="p-8 rounded-3xl bg-accent aspect-square w-full h-fit flex flex-col hover:-translate-y-4 transition-all duration-100 cursor-pointer">
						<h1 className="text-2xl font-extrabold ">Report the problem</h1>
						<Image src="/Error-unscreen.gif" width={500} height={500} className="object-contain w-full h-full min-h-72" alt="a" />
					</div>
				</div>
			</div> */}

			{/* A univeristy map you can click on the supported universities */}
			{/* <div className="w-full h-screen flex flex-col justify-center items-center gap-4 flex-auto px-[15%]">
				<UniversityMap />
			</div> */}

			{/* show which universities are currently using it */}
			<div className="w-full h-screen flex flex-col justify-center items-start gap-4 flex-auto px-[15%]">
				<h1 className="text-4xl font-extrabold border-slate-500 border-b-2">Trusted by ....</h1>	

			</div>

			<div className="w-full h-fit flex gap-16 bg-primary px-[15%] pt-32 pb-16">

				<div className="w-full flex justify-center items-center">
					<Image src="/cats/smt.png" className="" width={200} height={200} alt="?" />
				</div>

				<div className="w-full">
					<p className="text-6xl font-extrabold">Our</p>
					<p className="text-6xl font-extrabold pl-12">Mission</p>
					<p className="text-md font-extralight text-wrap pt-4">The aim of this project is to improve student experience at no extra cost, I hope that more projects like this come up taking advantage of many free resources that us students receive but dont take advantage of.</p>
				</div>


			</div>


			<div className="w-full h-[70vh] flex items-center gap-16 px-[15%]">
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
					<hr className="w-full"/>
					<p className="text-center">This is not only just a plug socket finding app, its a movement to encourage like minded people to <span className="font-extrabold text-primary">just do it</span>!</p>
				</div>

				<hr />

				<div className="flex flex-col items-center min-h-60">
					<FaBullseye className="w-16 h-16" />
					<p>Outcome</p>
					<hr className="w-full"/>
					<p className="text-center">We aim to help both students and university staff with identifying faulty plug sockets using this platform as a means for open communication about this issue.</p>
				</div>
			</div>

			<div className="w-full h-fit flex gap-16 bg-primary px-[15%] pt-32 pb-16">
				<div className="w-full">
					<p className="text-6xl font-extrabold">Questions &</p>
					<p className="text-6xl font-extrabold pl-12">Answers</p>
					<p className="text-md font-extralight text-wrap pt-4">Have questions? Here you&apos;ll find all the answers to your questions. If there is something missing feel free to reach out to us with absolutely any queries via our email.</p>
				</div>

				<div className="w-full flex justify-center items-center">
					<Image src="/cats/smt.png" className="" width={200} height={200} alt="?" />
				</div>
			</div>

			<div className="w-full h-fit flex justify-between px-[15%] pt-32 pb-16">
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
	)
}
