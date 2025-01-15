'use client'

import { LuDoorOpen } from "react-icons/lu";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { MdOutlineBugReport } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { CiWarning } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import { FaUniversity } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";


export function TopBar() {

	return (
		<div className="w-full h-12 border border-b-text px-[15%] py-1 flex justify-between">
			<div className="flex justify-center items-center gap-4">
				<Link href={"/"} className="flex justify-center items-center text-2xl font-extrabold"><span className="text-accent">Q</span><span className="text-secondary">Plug</span></Link>
				<Link href="/universities"><FaUniversity /></Link>
				<Link href="/buildings"><FaRegBuilding /></Link>
				<Link href="/rooms"><FaDoorOpen /></Link>
				<Link href="/sockets"><FaPlug /></Link>
			</div>




			<div className="flex justify-center items-center gap-4">
				<Link className="" href="/search"><CiSearch className="w-8 h-8" /></Link>
				<Link className="" href="/report"><CiWarning className="w-8 h-8" /></Link>
				{/* <Button1 href="/rooms">
					<p className="text-xl font-extralightx text-text_reverse p-1">Rooms</p>
					<LuDoorOpen className="w-8 h-8 font-extrabold text-text_reverse p-1" />
				</Button1> */}
				<div className="min-w-[1px] min-h-6  self-center border-l-[1px] border-slate-400 " />

				<div className="relative h-8 w-fit flex group cursor-pointer">
					<CiCircleQuestion className="w-full h-full aspect-square" />
					<RiArrowDropDownLine className="w-full h-full aspect-square group-hover:rotate-180 transition-all duration-200" />

					<div className="absolute top-8 right-0 w-fit h-fit rounded-md flex-col gap-2 hidden group-hover:flex">
						<div className="mt-4 w-fit h-fit py-4 shadow-md bg-white">
							<Link href="/suggestion" className="w-full h-fit flex gap-2 justify-start items-center text-nowrap px-2 hover:bg-slate-200 hover:text-accent hover:opacity-80">
								<MdOutlineBugReport className="" />
								<p className="">Report a bug</p>
							</Link>

							<Link href="/suggestion" className="w-full h-fit flex gap-2 justify-start items-center text-nowrap px-2 hover:bg-slate-200 hover:text-accent hover:opacity-80">
								<FcIdea />
								<p>Make a suggestion</p>
							</Link>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}