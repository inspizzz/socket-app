'use client'


// components
import Image from "next/image";
import Link from "next/link";
import { Loading } from "@/components/Loading"

// hooks
import { useEffect, useState } from "react"

// icons
import { SiMariadbfoundation } from "react-icons/si";

// database
import { getBuilding, getRoom, getSocket, getUniversity } from "@/firebase/firebase"


export default function ReportSocketPage({ params }) {

	const [infoLoading, setInfoLoading] = useState(true)

	const [socket, setSocket] = useState(null)
	const [room, setRoom] = useState(null)
	const [building, setBuilding] = useState(null)
	const [university, setUniversity] = useState(null)

	const [submitted, setSubmitted] = useState(false)
	const [submittedError, setSubmittedError] = useState(false)



	// get the socket
	useEffect(() => {

		getSocket(params.socketId).then((result) => {

			// load in socket data and continue the loading sequence
			console.log(result)
			setSocket(result)
		}).catch((e) => {

			// show the error message
			setInfoLoading(false)
		})
	}, [])

	useEffect(() => {

		// return if socket is invalid
		if (!socket) return


		getRoom(socket.roomId).then((result) => {
			setRoom(result)
		})

		getBuilding(socket.buildingId).then((result) => {
			setBuilding(result)
		})

		getUniversity(socket.universityId).then((result) => {
			setUniversity(result)
		})

		setInfoLoading(false)

	}, [socket])


	const report = () => {
		console.log("reported")

		// perform reporting logic here


		// show the user a thank you
		setSubmitted(true)
	}

	return (
		<div className="w-full min-h-screen flex justify-center items-center pt-12">
			{
				!infoLoading ? (
					<div className="w-full h-fit max-md:h-full flex justify-center items-center">
						{
							socket && room && building && university ? (
								!submitted ? (
									<div className="w-1/4 h-fit max-md:w-full min-h-full shadow-xl bg-white flex flex-col justify-between">
										<div className="flex flex-col">

											<Image src={"/campus.jpg"} className="w-full h-fit object-cover" width={500} height={500} alt="" />

											<div className="p-4 flex flex-col gap-4">
												<div className="flex gap-2 justify-start items-center">
													<Image src="/exeter.webp" height={100} width={100} className="w-full h-full max-w-8 max-h-8 aspect-square object-contain" alt="" />
													<h1 className="text-xl font-bold">{university.name}</h1>
												</div>

												<h1>You are in <b>{building.name}</b> building</h1>
												<h1>You are in <b>{room.name}</b> room</h1>
											</div>
										</div>

										<button className="w-full h-12 bg-primary self-end" onClick={() => report()}>
											<p className="text-xl font-extrabold text-white">Report</p>
										</button>
									</div>
								) : (
									!submittedError ? (
										<div className="w-full h-full flex flex-col justify-center items-center">
											<SiMariadbfoundation className="w-8 h-8" />
											<p>Thank you, your report was noted</p>
										</div>
									) : (
										<div className="w-full h-full flex flex-col justify-center items-center">
											<SiMariadbfoundation className="w-8 h-8" />
											<p>Uh oh, your report was not noted</p>
										</div>
									)

								)
							) : (
								<div className="w-full h-full flex flex-col justify-center items-center">
									<SiMariadbfoundation className="w-8 h-8" />
									<p>Error, could not find socket</p>
								</div>
							)
						}
					</div>
				) : (
					<div>
						<Loading message={"loading"} />
					</div>
				)
			}
		</div>
	)
}