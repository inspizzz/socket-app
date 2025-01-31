'use client'

import { useEffect } from "react"

export default function RoomPage({ params }) {

	const [room, setRoom] = useState({})
	const [sockets, setSockets] = useState([])

	// get the room information
	useEffect(() => {

	}, [])

	// get the sockets in the room
	useEffect(() => {

	}, [room])

	return (
		<div>
			<h1>room Page</h1>
		</div>
	)
}