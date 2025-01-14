'use client'

import { Loading } from "@/components/Loading"
import { getBuildings, getUniversity } from "@/firebase/firebase"
import Image from "next/image"
import { useEffect, useState } from "react"
import { SiMariadbfoundation } from "react-icons/si"
import { CiBacon } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { LuConstruction } from "react-icons/lu";


import Link from "next/link"


export default function UniversityPage({ params }) {

	const [university, setUniversity] = useState([])
	const [buildings, setBuildings] = useState([])

	const [loadingUniversity, setLoadingUniversity] = useState(true)
	const [loadingBuildings, setLoadingBuildings] = useState(true)
	const [error, setError] = useState(false)

	// get the universities information
	useEffect(() => {
		// get the university information
		getUniversity(params.universityId).then((data) => {
			setUniversity(data)
			setLoadingUniversity(false)
		}).catch((error) => {
			setError(true)
			setLoadingUniversity(false)
		})
	}, [])

	// explore buildings within the university
	useEffect(() => {
		// get all the buildings in the university
		getBuildings().then((data) => {
			setBuildings(data)
			setLoadingBuildings(false)
		}).catch((error) => {
			setError(true)
			setLoadingBuildings(false)
		})
	}, [])

	//
	return (
		<div className="w-full h-fit flex flex-col px-[15%]">
			<Image src="/exeter-banner.webp" width={1000} height={500} className="min-w-full h-1/3 object-cover" alt="a" />

			<div className="w-full h-fit">
				<div className="w-full h-full flex justify-between items-center border-b-[1px] bg-white">
					<div className="w-fit h-full flex justify-start items-center gap-16">
						<h1 className="text-2xl font-extrabold p-2 py-1 ">University of Exeter</h1>

						<div className="w-fit h-full flex justify-center items-center gap-2">
							<p className="font-normal">Buildings</p>

							<div className="min-w-[1px] min-h-6  self-center border-l-[1px] border-slate-400 " />

							<p>Something</p>
						</div>
					</div>


					<h1 className="text-lg font-light p-2 py-1">0 Reports</h1>
				</div>



				{/* <div className="w-full h-fit grid grid-cols-5 grid-rows-2 gap-4 py-8">
					<div className="col-start-1 row-start-1 aspect-square bg-white shadow-md rounded-md flex justify-center items-center">1</div>
					<div className="col-start-1 row-start-2 aspect-square bg-white shadow-md rounded-md flex justify-center items-center">2</div>
					<div className="col-start-2 row-start-1 aspect-square bg-white shadow-md rounded-md flex justify-center items-center">3</div>
					<div className="col-start-2 row-start-2 aspect-square bg-white shadow-md rounded-md flex justify-center items-center">4</div>
					<div className="col-span-3 row-span-2 col-start-3 row-start-1 bg-white shadow-md rounded-md flex flex-col justify-start  p-2">
						<h1 className="text-2xl font-extrabold">University of Exeter Reports</h1>
						
					</div>
				</div> */}

				<div className="w-full h-fit pt-8 pb-8">
					<h1 className="text-2xl font-extrabold">Buildings</h1>

					{
						loadingBuildings && <Loading message="loading buildings" />
					}

					{
						(buildings.length === 0 && !loadingBuildings) && <p>No buildings found</p>
					}

					{
						buildings.map((building, id) => {
							return (
								<Link key={id} href={`/buildings/${building.id}`} className="w-full h-fit flex justify-start items-center gap-4 bg-slate-100 shadow-md rounded-md p-2 mt-2">
									<div className="w-1/6 h-full flex justify-center items-center">
										<SiMariadbfoundation size={32} />
									</div>

									<div className="w-5/6 h-full flex flex-col justify-center items-start">
										<h1 className="text-lg font-extrabold">{building.name}</h1>
										<p className="text-sm font-light">{building.description}</p>
									</div>
								</Link>
							)
						})
					}
				</div>

			</div>
		</div >
	)
}

