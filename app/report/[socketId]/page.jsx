'use client'

import { Loading } from "@/components/Loading"
import { getSocket } from "@/firebase/firebase"
import Image from "next/image";
import { useEffect, useState } from "react"
import { SiMariadbfoundation } from "react-icons/si";


export default function ReportSocketPage({ params }) {
	const [socket, setSocket] = useState(null)
	const [loading, setLoading] = useState(true)
	const [submitted, setSubmitted] = useState(false)

	useEffect(() => {
		// get the socket data
		getSocket(params.socketId).then((socket) => {
			console.log(socket)
			setSocket(socket)
			setLoading(false)
		}).catch((error) => {
			console.log("socket not found")
			setLoading(false)
		})
	}, [])

	// whenever a new socket is loaded load a picture from the internet
	useEffect(() => {
		// TODO: insert here a way of loading in a random image that is motivational
	}, [socket])

	const report = () => {
		console.log("reported")

		// perform reporting logic here

		// show the user a thank you
		setSubmitted(true)
	}

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-1/4 h-1/2 shadow-xl flex justify-start items-center">
				{
					!loading ? (
						<div className="w-full h-full">
							{
								socket ? (
									<div className="w-full h-full px-[10%] py-[10%]">
										{
											!submitted ? (
												<div className="w-full h-full flex flex-col justify-between">
													<Image src={"/motivational/1.jpg"} className="rounded-2xl w-full h-36" width={500} height={500} alt="" />

													<button className="w-full h-8 bg-primary rounded-full" onClick={() => report()}>
														<p>Report</p>
													</button>
												</div>
											) : (
												<div className="w-full h-full flex flex-col justify-start items-center">
													<div className="w-full h-fit flex justify-start">
														<button className="w-fit h-8 px-2 py-1 bg-red-500 rounded-full" onClick={() => setSubmitted(false)}>
															<p>Back</p>
														</button>
													</div>

													<div className="w-full h-full flex justify-center items-center">
														<p className="font-extrabold text-3xl">Thank you</p>
													</div>
												</div>
											)
										}

									</div>
								) : (
									<div className="w-full h-full flex flex-col justify-center items-center">
										<SiMariadbfoundation className="w-8 h-8" />
										<p>Error not found</p>
									</div>
								)
							}
						</div>
					) : (
						<div className="self-center w-full">
							<Loading />
						</div>
					)
				}
			</div>
		</div>
	)
}