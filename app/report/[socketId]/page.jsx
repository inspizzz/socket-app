'use client'

import { Loading } from "@/components/Loading"
import { getBuilding, getRoom, getSocket, getUniversities, getUniversity } from "@/firebase/firebase"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import { SiMariadbfoundation } from "react-icons/si";
import { IoIosTrendingUp } from "react-icons/io";



export default function ReportSocketPage({ params }) {
	const [socket, setSocket] = useState(null)

	const [room, setRoom] = useState(null)
	const [building, setBuilding] = useState(null)
	const [university, setUniversity] = useState(null)

	const [socketLoading, setSocketLoading] = useState(true)
	const [infoLoading, setInfoLoading] = useState(true)
	const [submitted, setSubmitted] = useState(false)

	// get all information about a socket
	const getAll = async (roomId, buildingId, universityId) => {
		try {
			let room_data = await getRoom(roomId)
			let building_data = await getBuilding(buildingId)
			let university_data = await getUniversity(universityId)

			setRoom(room_data)
			setBuilding(building_data)
			setUniversity(university_data)

			return true
		} catch (e) {
			return false
		}
	}

	useEffect(() => {
		// get the socket data
		getSocket(params.socketId).then((socket) => {
			console.log(socket)
			setSocket(socket)
			setSocketLoading(false)
		}).catch((error) => {
			console.log("socket not found")
			setSocketLoading(false)
		})
	}, [])

	// whenever a new socket is loaded fetch information about the room, building and university
	useEffect(() => {
		if (!socket) return

		// load in new things
		getAll(socket.roomId, socket.buildingId, socket.universityId).then((result) => {
			setInfoLoading(false)
		})


	}, [socket])


	const report = () => {
		console.log("reported")

		// perform reporting logic here
		

		// show the user a thank you
		setSubmitted(true)
	}

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-1/5 h-1/2 shadow-xl flex justify-start items-center">
				{
					!socketLoading ? (
						<div className="w-full h-full">
							{
								socket ? (
									<div className="w-full h-full">
										{
											!infoLoading ? (
												<div className="w-full h-full">
													{
														room && building && university ? (
															<div className="w-full h-full">
																{
																	!submitted ? (
																		<div className="w-full h-full flex flex-col justify-between pt-4">
																			<div className="w-full h-fit flex justify-center items-center gap-2">
																				<Image src="/exeter.webp" height={100} width={100} className="w-full h-full max-w-8 max-h-8 aspect-square object-contain" alt="" />
																				<h1 className="text-xl font-bold">{university.name}</h1>
																			</div>

																			<div className="w-full h-fit flex gap-2 px-[5%]">
																				<div className="w-full min-h-fit aspect-square shadow-md p-2 flex flex-col justify-start items-center">
																					<div className="w-full h-fit">
																						<h1>Total Reports</h1>
																					</div>

																					<div className="w-full h-full flex justify-center items-center gap-1">
																						<p>0</p>
																						<IoIosTrendingUp />
																					</div>
																				</div>

																				<div className="w-full min-h-fit aspect-square shadow-md p-2 flex flex-col justify-start items-center">
																					<div className="w-full h-fit">
																						<h1>Total Reports</h1>
																					</div>

																					<div className="w-full h-full flex justify-center items-center gap-1">
																						<p>0</p>
																						<IoIosTrendingUp />
																					</div>
																				</div>
																			</div>

																			<div className="w-full h-fit px-[5%]">
																				<div className="w-full shadow-md p-2">
																					<h1>You are in <b>{building.name}</b> building</h1>
																					<h1>You are in <b>{room.name}</b> room</h1>
																				</div>
																			</div>

																			<button className="w-full h-12 bg-primary" onClick={() => report()}>
																				<p className="text-xl font-extrabold text-white">Report</p>
																			</button>
																		</div>
																	) : (
																		<div className="w-full h-full flex flex-col justify-center items-center">
																			<div className="w-full h-full flex flex-col justify-center items-center">
																				<p className="font-extrabold text-3xl">Thank you</p>

																				<div className="w-full h-fit flex gap-1 justify-center items-center">
																					<p className="text-slate-300 text-sm underline cursor-pointer" onClick={() => setSubmitted(false)}>Report Again</p>
																					<div />
																					<Link href="/" className="text-slate-300 text-sm underline cursor-pointer">Home</Link>
																				</div>
																			</div>
																		</div>
																	)
																}
															</div>
														) : (
															<div className="w-full h-full flex flex-col justify-center items-center">
																<SiMariadbfoundation className="w-8 h-8" />
																<p>Error room, building or university not found</p>
															</div>
														)
													}

												</div>
											) : (
												<div className="self-center w-full h-full flex justify-center items-center">
													<Loading message="loading university, building and room info ..." />
												</div>
											)
										}


									</div>
								) : (
									<div className="w-full h-full flex flex-col justify-center items-center">
										<SiMariadbfoundation className="w-8 h-8" />
										<p>Error socket not found</p>
									</div>
								)
							}
						</div>
					) : (
						<div className="self-center w-full">
							<Loading message="loading socket info ..." />
						</div>
					)
				}
			</div>
		</div >
	)
}