'use client'

import { LuDoorOpen } from "react-icons/lu";
import Link from "next/link";
import { Button1 } from "../General/Buttons/Button1";
import { CiSearch } from "react-icons/ci";
import { MdOutlineBugReport } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { CiWarning } from "react-icons/ci";


export function TopBar() {

	return (
		<div className="w-full h-12 border border-b-text px-[15%] py-1 flex justify-between">
			<Link href={"/"} className="flex justify-center items-center text-2xl font-extrabold"><span className="text-accent">Q</span><span className="text-secondary">Plug</span></Link>

			<div className="flex justify-center items-center gap-4">
				<Link className="" href="/search"><CiSearch className="w-8 h-8"/></Link>
				<Link className="" href="/report"><CiWarning className="w-8 h-8"/></Link>
				{/* <Button1 href="/rooms">
					<p className="text-xl font-extralightx text-text_reverse p-1">Rooms</p>
					<LuDoorOpen className="w-8 h-8 font-extrabold text-text_reverse p-1" />
				</Button1> */}
			</div>
		</div>
	)
}