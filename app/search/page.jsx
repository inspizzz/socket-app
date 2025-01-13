'use client'

import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";


export default function SearchPage() {
	const [search, setSearch] = useState("")
	const [results, setResults] = useState([])

	const [university, setUniversity] = useState({})
	const [building, setBuilding] = useState({})


	useEffect(() => {
		// add a listener to the enter key
	})

	const executeSearch = () => {
		
		// check if the search is empty in one line
		if(search === "") return

		// perform search
	}


	return (
		<div className="w-full h-fit flex flex-col">
			<div className="w-full h-full bg-gradient-to-r from-primary to-secondary flex flex-col gap-2 justify-center items-center py-[10%]">

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
						<div className="w-fit h-fit py-1 px-2 bg-emerald-400 rounded-full select-none cursor-pointer shadow-md">
							<p>University of Exeter</p>
						</div>

						<div className="w-fit h-fit py-1 px-2 bg-slate-200 rounded-full select-none cursor-pointer shadow-md">
							<p>The Forum</p>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="w-full h-fit px-[15%] pt-12">
				<h1 className="text-2xl font-extrabold">Select University</h1>

				<div className="snap-mandatory snap-x overflow-scroll w-full h-fit flex justify-start items-center gap-4 scroll-smooth pt-2">
					{
						[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((uni, index) => {
							return (
								<div key={index} className="snap-always snap-center min-w-60 aspect-square bg-white p-2 rounded-md shadow-md hover:-translate-y-2 cursor-pointer transition-all duration-200" onClick={() => setUniversity({ name: `University ${uni}`, description: "Description" })}>
									<h1 className="text-xl font-extrabold">University {uni}</h1>
									<p className="text-sm font-extralight">Description</p>
								</div>
							)
						})
					}
				</div>
			</div>

			<div className="w-full h-fit px-[15%] pt-12">
				<h1 className="text-2xl font-extrabold">Select Building</h1>

				<div className="snap-mandatory snap-x overflow-scroll w-full h-fit flex justify-start items-center gap-4 scroll-smooth pt-2 ">
					{
						[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((uni, index) => {
							return (
								<div key={index} className="snap-always snap-center min-w-60 aspect-square bg-white p-2 rounded-md shadow-md hover:-translate-y-2 cursor-pointer transition-all duration-200" onClick={() => setBuilding({ name: `Building ${uni}`, description: "Description" })}>
									<h1 className="text-xl font-extrabold">Building {uni}</h1>
									<p className="text-sm font-extralight">Description</p>
								</div>
							)
						})
					}
				</div>
			</div> */}



			<div className="w-full h-full px-[15%] pt-12">
				<h1 className="text-2xl font-extrabold">Results</h1>

				{/* empty */}
				{
					results.length === 0 && (
						<div className="w-full h-full flex flex-col justify-center items-center py-[5%]">
							<Loading message="No results found"/>
						</div>
					)
				}


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