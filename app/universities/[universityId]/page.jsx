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
		}).catch((error) => {
			setError(true)
			setLoadingBuildings(false)
		})
	}, [])

	//
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-1/4 h-fit shadow-xl flex justify-start items-center">
				{
					!loadingUniversity ? (
						<div className="w-full h-full">
							{
								Object.keys(university).length > 0 ? (
									<div className="w-full h-full px-[10%] py-[10%] flex flex-col gap-2">
										<div className="w-full h-fit flex justify-between items-center px-[5%]">
											<h1 className="text-xl font-extrabold">{university.name}</h1>
											<CiBacon className="aspect-square h-full cursor-pointer" />
										</div>

										<Image src="/exeter-banner.webp" width={1000} height={500} className="w-full h-1/3 object-cover top-0 left-0 rounded-xl" alt="a" />

										{/* some statistics */}
										<div>
											{/* <h1 className="text-md font-normal flex justify-start items-center gap-2"><IoAnalytics /> Statistics</h1> */}

											<div className="w-full h-fit flex justify-evenly items-center gap-3">
												{/* under maintenance */}
												<div className="w-full h-fit p-4 rounded-md shadow-md flex flex-col">
													<h1 className="text-nowrap text-sm font-bold">Statistics Under Maintenance</h1>

													<LuConstruction className="self-center " />
												</div>
												{/* <div className="w-full max-h-full aspect-square bg-slate-200 p-4 rounded-md shadow-md">
													<h1 className="text-nowrap text-sm font-bold">Total reports</h1>

													<div className="w-full h-fit flex justify-center items-center">
														<p>10</p>
													</div>
												</div>

												<div className="w-full h-full aspect-square bg-slate-200 p-4 rounded-md shadow-md">
													<h1 className="text-nowrap text-sm font-bold">Time Series</h1>

													<GrAnalytics className="w-fit h-fit" />
												</div>

												<div className="w-full h-full aspect-square bg-slate-200 p-4 rounded-md shadow-md">
												</div> */}
											</div>

											{/* buildings to select */}
											<div className="w-full h-fit">
												<h1 className="text-md font-normal">Buildings</h1>

												<div className="w-full h-fit flex gap-3 overflow-x-scroll overflow-hidden no-scrollbar py-2">
													{
														buildings.map((building, id) => {
															return (
																<Link href={`/buildings/${building.id}`} key={id} className="w-20 aspect-square bg-slate-100 shadow-md rounded-xl flex justify-center items-center transition-all duration-200 hover:-translate-y-2 cursor-pointer">
																	<p className="text-sm">{building.name}</p>
																</Link>
															)
														})
													}
												</div>
											</div>
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
							<Loading message="loading university" />
						</div>

					)
				}
			</div>

		</div >
	)
}