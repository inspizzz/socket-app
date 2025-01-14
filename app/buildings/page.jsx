'use client'

import { getBuildings } from "@/firebase/firebase"
import { useEffect, useState } from "react"

export default function BuildingsPage() {

	const [buildings, setBuildings] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	// get the buildings information
	useEffect(() => {
		getBuildings((buildings) => {
			setBuildings(buildings)
			setLoading(false)
		}).catch((error) => {
			setError(true)
			setLoading(false)
		})
	}, [])

	// explore different buildings on different universities
	return (
		<div className="w-full h-screen">
			<h1>Buildings Page</h1>
		</div>
	)
}