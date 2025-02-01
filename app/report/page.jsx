'use client'

import { Loading } from "@/components/Loading"
import { QrReader } from "@/components/QrReader"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"


export default function ReportPage2() {

	const router = useRouter();

	const [result, setResult] = useState(false)
	const [scanned, setScanned] = useState(false)
	const [socketId, setSocketId] = useState("")

	useEffect(() => {
		if (!scanned) return

		setResult(true)
		router.push(`/report/${scanned}`)

	}, [scanned])

	return (
		<div className="min-h-screen flex flex-col justify-center items-center pt-12">
			{
				!result ? (
					<div className="w-1/4 max-md:w-full h-fit max-md:h-full shadow-xl bg-white flex flex-col justify-start items-center">
						<div className="w-full h-full p-8 flex flex-col gap-4">
							<div>
								<h1 className="text-xl font-extrabold self-start">Scan QR code</h1>
								<p className="text-sm font-extralight self-start text-slate-400">This can be found next to the plug socket. Alternatively, enter unique id on the sticker next to the socket!</p>
							</div>

							<QrReader setResult={setScanned} />

							<div className="w-full h-fit flex flex-col">
								<label htmlFor="socketId" className="text-sm font-light">Socket id</label>
								<input type="text" value={socketId} onChange={(e) => setSocketId(e.target.value)} className="border border-black rounded-md h-8 p-2"/>
							</div>

							<button className="w-full h-fit bg-slate-400 text-white rounded-md p-2" onClick={() => setScanned(socketId)}>Submit</button>
						</div>

						<div className="w-full h-fit bg-slate-200 flex flex-col justify-center items-center">
							<p className="py-3 text-slate-400 font-extralight">Trsutworthy security</p>
							<div className="w-full h-[1px] border-b-[1px] border-slate-100" />
						</div>
					</div>
				) : (
					<div className="flex flex-col justify-start items-center">
						<div className="w-full h-full flex justify-center items-center">
							<Loading message="Scanning..." />
						</div>
					</div>
				)
			}
		</div>
	)
}