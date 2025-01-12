'use client'

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";


export default function SearchPage() {
	const [search, setSearch] = useState("")
	const [results, setResults] = useState([])


	const [filterUniversities, setFilterUniversities] = useState(false)
	const [filterBuildings, setFilterBuildings] = useState(false)

	useEffect(() => {
		// add a listener to the enter key
	})

	const executeSearch = () => {
		console.log("searching")
	}


	return (
		<div className="w-full h-screen flex flex-col">
			<div className="w-full h-1/2 bg-gradient-to-r from-primary to-secondary flex flex-col gap-2 justify-center items-center">

				{/* the input box */}
				<div className="w-1/4 h-fit flex flex-col gap-2">
					<div className="bg-white rounded-full w-full flex gap-2 justify-between items-center overflow-hidden">
						<div className="min-w-full flex gap-2 justify-between items-center overflow-hidden">
							<CiSearch className="min-w-8 h-8" />

							<input type="text" placeholder="search" className="w-full h-full focus:outline-none border-none" onChange={(e) => setSearch(e.target.value)} />
						</div>


						<div className={`min-w-fit h-full p-1 overflow-hidden transition-all duration-200 transform  ${search !== "" ? "opacity-100 -translate-x-[110%]" : "opacity-0"}`}>
							<button className="bg-accent rounded-full px-2 py-1" onClick={() => executeSearch()}>Search</button>
						</div>
					</div>


					{/* the filters box */}
					<div className="w-fit flex gap-2 justify-evenly">
						<div className={`${filterUniversities ? "bg-accent shadow-sm shadow-secondary" : "bg-white"} w-fit h-fit py-1 px-2 rounded-full select-none cursor-pointer`} onClick={() => setFilterUniversities(!filterUniversities)}>
							<p>Universities</p>
						</div>

						<div className={`${filterBuildings ? "bg-accent shadow-sm shadow-secondary" : "bg-white"} w-fit h-fit py-1 px-2 rounded-full select-none cursor-pointer`} onClick={() => setFilterBuildings(!filterBuildings)}>
							<p>Buildings</p>
						</div>
					</div>
				</div>


			</div>

			<div className="w-full h-full px-[15%] pt-12">
				<h1 className="text-2xl font-extrabold">Results</h1>

				{/* filters */}
				<div className="flex gap-2 ">
					{
						filterUniversities && (
							<p className="w-fit px-2 py-1 bg-red-500 rounded-full text-sm font-extralight text-white">Universities</p>
						)
					}

					{
						filterBuildings && (
							<p className="w-fit px-2 py-1 bg-red-500 rounded-full text-sm font-extralight text-white">Buildings</p>
						)
					}

					{
						(!filterBuildings && !filterUniversities) && (
							<p>no filters</p>
						)
					}
				</div>

				{/* show the results */}
				<div className="w-full h-fit flex flex-col gap-2">
					{
						results.map((result, index) => {
							return (
								<div key={index} className="w-full h-fit bg-white p-2 rounded-md shadow-md">
									<h1 className="text-xl font-extrabold">{result.name}</h1>
									<p className="text-sm font-extralight">{result.description}</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}