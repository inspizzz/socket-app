'use client'

import { getUniversities } from "@/firebase/firebase";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export function UniversityMap() {

	const [universities, setUniversities] = useState([
		{
			id: "1",
			coords: [100, 200]
		}
	])
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])

	// fetch all universities
	useEffect(() => {
		getUniversities().then((data) => {
			console.log(data)
			setUniversities(data)
		})
	}, [])

	return loaded && (
		<div className="relative w-1/2 h-fit">
			<Image id="univeristymap" src="/UK.webp" className="w-full min-h-full z-50 top-0 left-0 object-contain" width={500} height={500} alt="" />

			{
				universities.map((uni, index) => {
					return (
						<Link key={index} href={`/universities/${uni.id}`} className={`min-w-4 min-h-4 absolute top-[90%] left-[50%] bg-red-600 rounded-full shadow shadow-red-500 z-50 `} />
					)
				})
			}
		</div>

	)
}