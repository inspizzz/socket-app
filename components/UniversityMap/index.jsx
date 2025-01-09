'use client'

import { getUniversities } from "@/firebase/firebase";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export function UniversityMap() {

	const [universities, setUniversities] = useState([
		{
			id: "1",
			coords: [0.5, 0.9]
		}
	])

	// fetch all universities
	// useEffect(() => {
	// 	getUniversities().then((data) => {
	// 		console.log(data)
	// 		setUniversities(data)
	// 	})
	// }, [])

	return (
		<div className="relative w-1/2 h-full">
			<Image id="univeristymap" src="/UK.webp" className="absolute min-w-full in-h-full z-50 top-0 left-0" width={500} height={500} alt="" />

			{
				universities.map((uni, index) => {
					// get the width and height of the image
					const image = window.document.getElementById("univeristymap")
					if (!image) return null

					const width = image.width
					const height = image.height

					const scaled_width = uni.coords[0] * width
					const scaled_height = uni.corrds[1] * height

					
					return (
						<Link key={index} href={`/universities/${uni.id}`} className={`min-w-2 min-h-2 absolute top-[${scaled_height}px] left-[${scaled_width}px] bg-black`} />
					)
				})
			}
		</div>

	)
}