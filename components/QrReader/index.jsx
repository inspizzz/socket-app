// components/QRScanner.js
import React, { useEffect, useRef, useState } from 'react'
import QrScanner from 'qr-scanner'
import { FiCameraOff } from "react-icons/fi"
import { Loading } from '../Loading'

export function QrReader({ setResult }) {
	const videoRef = useRef(null)
	const qrScannerRef = useRef(null)

	
	const [refresh, setRefresh] = useState(0)
	const [loading, setLoading] = useState(true)
	const [isCameraEnabled, setIsCameraEnabled] = useState(false)

	const startScanner = async () => {
		console.log("trying to start scanner")
		try {
			console.log(videoRef)
			if (videoRef.current) {
				if (qrScannerRef.current) {
					qrScannerRef.current.destroy(); // Ensure the previous instance is cleaned up
				}

				qrScannerRef.current = new QrScanner(
					videoRef.current,
					(result) => setResult(result.data),
					{
						highlightScanRegion: true, // Optional: highlights the scan area
						highlightCodeOutline: true, // Optional: highlights the code itself
					}
				)

				await qrScannerRef.current.start()
			}
		} catch (error) {
			console.error('Camera start error:', error)
			setIsCameraEnabled(false) // Camera is not enabled
		}
	}

	const stopScanner = () => {
		console.log("stopping scanner")
		if (qrScannerRef) {
			qrScannerRef.current.destroy()
			setRefresh(0)
			setLoading(true)
			setIsCameraEnabled(false)
		}
	}

	useEffect(() => {
		startScanner()
		setIsCameraEnabled(true)
		setLoading(false)

		return () => stopScanner()
	}, [refresh])


	// useEffect(() => {
	// 	if (!scanning) {
	// 		stopScanner()
	// 	}
	// }, [scanning])

	return (
		<div className='relative w-full min-h-fit flex flex-col justify-center items-center'>
			<video ref={videoRef} className={`min-w-full min-h-full ${(!loading && !isCameraEnabled) ? "hidden" : "flex" }`} />
			{
				!loading ? (
					<div>
						{
							!isCameraEnabled && (
								<div className='w-full aspect-video flex flex-col justify-center items-center px-[10%]'>
									<FiCameraOff className='text-2xl' />
									<h1 className='text-xl font-extrabold'>We couldn&apos;t find your camera</h1>
									<p className='text-sm font-extralight self-start text-slate-400'>Please update your browser settings or use our manual input option found below or <span className='underline text-accent cursor-pointer' onClick={() => setRefresh((prev) => prev + 1)}>Try again</span> </p>
								</div>
							)
						}
					</div>
				) : (
					<div className='absolute top-0 left-0 w-full h-fit flex flex-col justify-center items-center px-[10%] z-50'>
						<Loading message='loading camera' />
					</div>
				)
			}


		</div>
	)
}
