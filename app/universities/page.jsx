'use client'

import { Loading } from "@/components/Loading"
import { getUniversities } from "@/firebase/firebase"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function UniversitiesPage() {
	const [universities, setUniversities] = useState([])


	useEffect(() => {
		getUniversities().then((data) => {
			setUniversities(data)
		})
	}, [])

	return (
		<div className="w-full h-screen px-[15%]">
			<Image src="/exeter-banner.webp" width={1000} height={500} className="w-full h-1/3 object-cover top-0 left-0" alt="a" />

			<h1 className="text-3xl font-bold">Our participating universities</h1>

			{
				universities.length === 0 &&
				<Loading message="loading universities" />
			}

			<div className="grid grid-cols-3 gap-4">
				{
					universities.map((university, id) => {
						return (
							<Link key={id} href={`/universities/${university.id}`} className="flex w-40 aspect-square justify-center items-center bg-slate-100 shadow-md rounded-xl">
								<p>{university.name}</p>
							</Link>
						)
					})
				}
			</div>

		</div>
	)
}