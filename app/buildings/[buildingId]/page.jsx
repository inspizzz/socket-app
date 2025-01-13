import { useEffect } from "react"

export default function BuildingPage({ params }) {

	const [building, setBuilding] = useState({})
	const [rooms, setRooms] = useState([])

	// get the building information
	useEffect(() => {

	}, [])

	// get all the rooms in the building
	useEffect(() => {

	}, [building])

	// show the chosen building and the rooms inside of it
	// some basic statistics about the building
	return (
		<div>
			<h1>Building Page</h1>
		</div>
	)
}