'use client'

import { QrReader } from "@/components/QrReader"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loading } from "@/components/Loading"
import { GrSecure } from "react-icons/gr";


export default function ReportSocket() {

	const router = useRouter();

	const [socketId, setSocketId] = useState("")

	const [scanning, setScanning] = useState(true)
	const [searching, setSearching] = useState(false)
	const [result, setResult] = useState(false)




	useEffect(() => {
		if (!result) return

		console.log("result", result)
		router.push(`/report/${result}`)

	}, [result])

	return (
		<div className="w-full h-screen max-md:h-[95vh] flex flex-col justify-center items-center">
			{
				!result ? (
					<div className="w-full h-full flex justify-center items-center">
						{
							scanning ? (
								<div className="w-1/4 max-md:w-full h-fit max-md:h-full shadow-xl bg-white flex flex-col justify-start items-center">
									<div className="w-full h-full flex justify-between flex-col">

										<div>
											<div className="w-full h-fit p-8 flex flex-col gap-4">
												<div>
													<h1 className="text-xl font-extrabold self-start">Please scan qr code</h1>
													<p className="text-sm font-extralight self-start text-slate-400">This can be found on the sticker next to the faulty socket, please allow a little time to allow your camera to capture it :)</p>
												</div>
											</div >

											<div className="w-full h-fit">
												<QrReader setResult={setResult} />
											</div>
										</div>

										<div className="w-full h-fit bg-slate-200 flex flex-col justify-center items-center self-end">
											<p className="py-3 text-slate-400 font-extralight">Want to try manually? <span className="font-normal underline text-slate-400 cursor-pointer" onClick={() => setScanning(false)}>Enter</span></p>
											<div className="w-full h-[1px] border-b-[1px] border-slate-100" />

											<div className="w-full h-fit flex justify-center items-center">
												<GrSecure className="" />
												<p className="py-3 text-slate-400">Secured by <span className="text-slate-500">wiktor</span></p>
											</div>
										</div>
									</div >
								</div >
							) : (
								<div className="w-1/4 max-md:w-full h-fit max-md:h-full shadow-xl bg-white flex flex-col justify-start items-center">
									<div className="w-full h-full p-8 flex flex-col gap-4">
										<div>
											<h1 className="text-xl font-extrabold self-start">Please enter socket id</h1>
											<p className="text-sm font-extralight self-start text-slate-400">This can be found on the sticker next to the faulty socket and you can use either long or short socket identifier.</p>
										</div>

										<Image src="/scanning.png" width={500} height={500} className="min-w-full h-1/3 object-contain" alt="a" />

										<div className="w-full h-fit flex flex-col">
											<label htmlFor="socketId" className="text-sm font-light">Socket id</label>
											<input type="text" className="border border-black rounded-md h-8 p-2" onChange={(e) => setSocketId(e.target.value)} />
										</div>

										<button className="w-full h-fit bg-slate-400 text-white rounded-md p-2" onClick={() => setResult(socketId)}>Submit</button>
									</div>

									<div className="w-full h-fit bg-slate-200 flex flex-col justify-center items-center">
										<p className="py-3 text-slate-400 font-extralight">Want to try scanning? <span className="font-normal underline text-slate-400 cursor-pointer" onClick={() => setScanning(true)}>Scan</span></p>
										<div className="w-full h-[1px] border-b-[1px] border-slate-100" />

										<div className="w-full h-fit flex justify-center items-center">
											<GrSecure className="" />
											<p className="py-3 text-slate-400">Secured by <span className="text-slate-500">wiktor</span></p>
										</div>
									</div>
								</div>
							)
						}
					</div>
				) : (
					<div className="w-1/4 h-fit shadow-xl bg-white flex flex-col justify-start items-center">
						<div className="w-full h-full flex justify-center items-center">
							<Loading message="Scanning..." />
						</div>
					</div>
				)
			}

		</div >
	)
}