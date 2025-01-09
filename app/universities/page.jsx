'use client'

import { getUniversities } from "@/firebase/firebase"
import { useEffect, useState } from "react"


export default function UniversitiesPage() {
	const [universities, setUniversities] = useState([])


	useEffect(() => {
		getUniversities().then((data) => {
			setUniversities(data)
		})
	}, [])

	return (
		<div className="w-full h-screen">
			{
				universities.map((university, id) => {
					return (
						<div key={id} className="flex w-full justify-center items-center">
							<p>{university.name}</p>
						</div>
					)
				})
			}
		</div>
	)
}