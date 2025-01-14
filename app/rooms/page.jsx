'use client'

import { getRooms } from "@/firebase/firebase"
import { useEffect, useState } from "react"

export default function RoomsPage() {

	const [rooms, setRooms] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	// get the buildings information
	useEffect(() => {
		getRooms((room) => {
			setRooms(room)
			setLoading(false)
		}).catch((error) => {
			setError(true)
			setLoading(false)
		})
	}, [])

	// explore different buildings on different universities
	return (
		<div className="w-full h-screen">
			<h1>Rooms Page</h1>
		</div>
	)
}