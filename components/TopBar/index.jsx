'use client'

import Link from "next/link";

// icons
import { MdOutlineBugReport } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import Image from "next/image";


export function TopBar() {

	return (
		<div className="absolute top-0 left-0 right-0 w-full h-12 border-b border-b-text px-[10%] py-1 flex justify-between bg-[#ededed]">
			<div className="flex justify-center items-center gap-4">
				{/* <Image src={"/exeter.gif"} className="w-8 h-8" width={500} height={500} alt="" /> */}
				<Link href={"/"} className="flex justify-center items-center text-2xl font-extrabold"><span className="text-accent">Q</span><span className="text-secondary">Plug</span></Link>
			</div>

			<div className="flex justify-center items-center gap-4">
				<Link className="" href="/report"><CiWarning className="w-8 h-8" /></Link>

				<div className="min-w-[1px] min-h-6  self-center border-l-[1px] border-slate-400 " />

				<div className="relative h-8 w-fit flex group cursor-pointer">
					<CiCircleQuestion className="w-8 h-8" />
					<RiArrowDropDownLine className="w-8 h-8 aspect-square group-hover:rotate-180 transition-all duration-200" />

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