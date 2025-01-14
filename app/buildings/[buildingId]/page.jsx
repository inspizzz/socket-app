'use client'

import { Loading } from "@/components/Loading"
import { getBuilding, getRooms } from "@/firebase/firebase"
import { useEffect, useState } from "react"
import { SiMariadbfoundation } from "react-icons/si"

export default function BuildingPage({ params }) {

	const [building, setBuilding] = useState({})
	const [rooms, setRooms] = useState([])

	const [error, setError] = useState(null)
	const [loadingBuilding, setLoadingBuilding] = useState(true)
	const [loadingRooms, setLoadingRooms] = useState(true)

	// get the building information
	useEffect(() => {
		getBuilding(params.buildingId).then((building) => {
			setBuilding(building)
			setLoadingBuilding(false)
		}).catch((error) => {
			setError(error)
			setLoadingBuilding(false)
		})
	}, [])

	// get all the rooms in the building
	useEffect(() => {
		getRooms(params.buildingId).then((rooms) => {
			setRooms(rooms)
			setLoadingRooms(false)
		}).catch((error) => {
			setError(error)
			setLoadingRooms(false)
		})
	}, [building])

	// show the chosen building and the rooms inside of it
	// some basic statistics about the building
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-1/4 h-fit shadow-xl flex justify-start items-center">
				{
					!loadingBuilding ? (
						<div className="w-full h-full">
							{
								Object.keys(building).length > 0 ? (
									<div className="w-full h-full px-[10%] py-[10%] flex flex-col gap-2">
										<div className="w-full h-fit flex justify-between items-center px-[5%]">
											<h1 className="text-xl font-extrabold">{building.name}</h1>
											<p className="text-sm font-light">{building.address}</p>
										</div>
										<div className="w-full h-fit flex flex-col gap-2 px-[5%]">
											<p className="text-sm font-light">{building.description}</p>
											<p className="text-sm font-light">Rooms: {rooms.length}</p>
										</div>
										<div className="w-full h-fit flex flex-col gap-2 px-[5%]">
											<p className="text-sm font-light">Statistics</p>
											<p className="text-sm font-light">Average room size: {rooms.reduce((acc, room) => acc + room.size, 0) / rooms.length} sqft</p>
											<p className="text-sm font-light">Average room capacity: {rooms.reduce((acc, room) => acc + room.capacity, 0) / rooms.length} people</p>
										</div>
										<div className="w-full h-fit flex flex-col gap-2 px-[5%]">
											<p className="text-sm font-light">Rooms</p>
											{
												rooms.map((room) => (
													<div key={room.id} className="w-full h-fit flex justify-between items-center px-[5%]">
														<p className="text-sm font-light">{room.name}</p>
														<p className="text-sm font-light">{room.capacity} people</p>
													</div>
												))
											}
										</div>
									</div>
								) : (
									<div className="w-full h-full flex flex-col justify-center items-center">
										<SiMariadbfoundation className="w-8 h-8" />
										<p>Error not found</p>
									</div>
								)
							}
						</div>
					) : (
						<div className="self-center w-full">
							<Loading message="loading building" />
						</div>
					)
				}
			</div>
		</div>
	)
}