'use client'

import { Loading } from "@/components/Loading";
import { getBuildings, getRooms, getUniversities } from "@/firebase/firebase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import { FaDoorOpen, FaRegBuilding } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { SiMariadbfoundation } from "react-icons/si";


export default function SearchPage() {
	const [search, setSearch] = useState("")
	const [results, setResults] = useState([])

	const [selectedUniversity, setSelectedUniversity] = useState(false)
	const [selectedBuilding, setSelectedBuilding] = useState(false)

	const [universities, setUniversities] = useState([])
	const [buildings, setBuildings] = useState([])

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)



	useEffect(() => {
		// add a listener to the enter key
	})

	useEffect(() => {
		// fetch all universities
		getUniversities().then((data) => {
			setUniversities(data)
			setLoading(false)
		}).catch((error) => {
			console.log(error)
			setError(true)
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		if (!selectedUniversity) return

		// fetch all buildings for a university
		getBuildings({universityId: selectedUniversity.id}).then((data) => {
			setBuildings(data)
		}).catch((error) => {
			console.log(error)
			setError(true)
		})
	}, [selectedUniversity])

	const executeSearch = () => {

		// check if the search is empty in one line
		if (search === "") return

		// perform search
		console.log("searching for ", search)

		if (selectedUniversity && selectedBuilding) {
			// search for rooms
			console.log("searching for rooms")

			// reset the results
			setResults([])

			// get the rooms
			getRooms({universityId: selectedUniversity.id, buildingId: selectedBuilding.id}).then((data) => {
				setResults(data)
			}).catch((error) => {
				console.log(error)
				setError(true)
			})

		} else if (selectedUniversity) {
			// search for buildings and rooms
			console.log("searching for buildings and rooms")

			// reset the results
			setResults([])

			// get the rooms
			getRooms({universityId: selectedUniversity.id}).then((data) => {
				setResults([...buildings, ...data])
			}).catch((error) => {
				console.log(error)
				setError(true)
			})
		} else {
			// search for universities, buildings and rooms
			console.log("searching for universities and buildings and rooms")

			// reset the results
			setResults([])

			getUniversities().then((data) => {
				setResults((prev) => [...prev, ...data])
			}).catch((error) => {
				console.log(error)
				setError(true)
				return []
			})

			getBuildings({}).then((data) => {
				setResults((prev) => [...prev, ...data])
			}).catch((error) => {
				console.log(error)
				setError(true)
				return []
			})

			// get the rooms
			getRooms({}).then((data) => {
				setResults((prev) => [...prev, ...data])
			}).catch((error) => {
				console.log(error)
				setError(true)
				return []
			})
		}
	}




	return !loading ? (
		<div className="w-full min-h-screen flex flex-col">
			{
				!error ? (
					<div className="w-full h-full flex flex-col">
						<div className="w-full h-full bg-gradient-to-r from-primary to-secondary flex flex-col gap-2 justify-center items-center py-[10%]">

							{/* the input box */}
							<div className="w-1/4 h-fit flex flex-col gap-2">
								<div className="w-full h-fit py-4 flex justify-center items-center">
									<h1 className="text-2xl font-extrabold">Search Our Data</h1>
								</div>
								<div className="bg-white rounded-full w-full flex gap-2 justify-between items-center overflow-hidden">
									<div className="min-w-full flex gap-2 justify-between items-center overflow-hidden">
										<CiSearch className="min-w-8 h-8" />

										<input
											type="text"
											placeholder="search"
											className="w-full h-full focus:outline-none border-none"
											onChange={(e) => setSearch(e.target.value)}
											onKeyDown={(e) => e.key === "Enter" && executeSearch()}
										/>
									</div>


									<div className={`min-w-fit h-full p-1 overflow-hidden transition-all duration-200 transform  ${search !== "" ? "opacity-100 -translate-x-[110%]" : "opacity-0"}`}>
										<button className="bg-accent rounded-full px-2 py-1" onClick={() => executeSearch()}>Search</button>
									</div>
								</div>


								{/* the filters box */}
								<div className="w-fit flex gap-2 justify-evenly">

									{
										selectedUniversity ? (
											<div className={`relative w-fit h-fit text-nowrap py-1 px-2 ${`bg-${selectedUniversity.color}-400`} rounded-full select-none cursor-pointer shadow-md group z-50`}>
												<div className="flex justify-center items-center gap-2">
													<p>{selectedUniversity.name}</p>
													<button className="hover:scale-105 hover:bg-white rounded-full" onClick={() => { setSelectedUniversity(false); setSelectedBuilding(false) }}><IoMdClose /></button>
												</div>
											</div>
										) : (
											<div className={`relative w-fit h-fit text-nowrap py-1 px-2 bg-slate-200 rounded-full select-none cursor-pointer shadow-md group z-50`}>
												<p>Select a university</p>

												<div className="absolute top-8 right-0 w-fit h-fit rounded-md flex-col gap-2 hidden group-hover:flex">
													<div className="mt-4 w-fit h-fit p-2 bg-white rounded-md">
														{
															universities.map((uni, index) => {
																console.log(uni)
																return (
																	<div key={index} className="w-full h-fit flex gap-2 justify-start items-center text-nowrap px-2 hover:bg-slate-200 hover:text-accent hover:opacity-80" onClick={() => setSelectedUniversity(uni)}>
																		<p>{uni.name}</p>
																	</div>
																)
															})
														}
													</div>
												</div>
											</div>
										)
									}

									{
										selectedUniversity && (
											<div className={`relative w-fit h-fit text-nowrap py-1 px-2 bg-slate-200 rounded-full select-none cursor-pointer shadow-md group z-50`}>
												{
													selectedBuilding ? (
														<div className="flex justify-center items-center gap-2">
															<p>{selectedBuilding.name}</p>
															<button className="hover:scale-105 hover:bg-white rounded-full" onClick={() => setSelectedBuilding(false)}><IoMdClose /></button>
														</div>
													) : (
														<div>
															<p>Select a building</p>

															<div className="absolute top-8 right-0 w-fit h-fit rounded-md flex-col gap-2 hidden group-hover:flex">
																<div className="mt-4 w-fit h-fit p-2 bg-white rounded-md">
																	{
																		buildings.length === 0 && <p>No buildings found</p>
																	}
																	{
																		buildings.map((building, index) => {
																			console.log(building)
																			return (
																				<div key={index} className="w-full h-fit flex gap-2 justify-start items-center text-nowrap px-2 hover:bg-slate-200 hover:text-accent hover:opacity-80" onClick={() => setSelectedBuilding(building)}>
																					<p>{building.name}</p>
																				</div>
																			)
																		})
																	}
																</div>
															</div>
														</div>
													)
												}
											</div>
										)
									}
								</div>
							</div>
						</div>

						<div className="w-full h-full px-[15%] pt-12">

							{!selectedUniversity && <h1 className="text-2xl font-extrabold">Searching Universities, Buildings & Rooms</h1>}

							{(selectedUniversity && !selectedBuilding) && <h1 className="text-2xl font-extrabold">Searching Buildings & Rooms</h1>}

							{(selectedUniversity && selectedBuilding) && <h1 className="text-2xl font-extrabold">Searching Rooms</h1>}


							{/* empty */}
							{
								results.length === 0 && (
									<div className="w-full h-full flex flex-col justify-center items-center py-[5%]">
										<Loading message="No results found" />
									</div>
								)
							}

							{/* show the results */}
							<div className="w-full h-fit flex flex-col gap-2">
								{
									results.map((result, index) => {
										return (
											<Link href={`/${result.type}/${result.id}`} key={index} className="w-full h-fit bg-white p-2 rounded-md shadow-md flex justify-start items-center gap-2">
												{result.type == "universities" && <FaUniversity />}
												{result.type == "buildings" && <FaRegBuilding />}
												{result.type == "rooms" && <FaDoorOpen />}
												<h1 className="text-xl font-extrabold">{result.name}</h1>
											</Link>
										)
									})
								}
							</div>
						</div>
					</div>
				) : (
					<div className="w-full h-full flex justify-center items-center">
						<SiMariadbfoundation className="w-8 h-8" />
						<p>Oops, an error occurred</p>
					</div>
				)
			}

		</div >
	) : (
		<div className="w-full h-screen flex justify-center items-center">
			<Loading message="loading ..." />
		</div>
	)
}