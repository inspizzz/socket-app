import { LiaCookieSolid } from "react-icons/lia";


export function NoCookies() {
	return (
		<div className="fixed right-0 bottom-0 p-2">
			<div className="min-w-12 w-12 min-h-12 h-12 rounded-full flex justify-end items-center cursor-pointer pl-3 px-1 py-1 gap-2 group hover:w-64 transition-all duration-200 bg-white border border-slate-300">
				<p className="text-nowrap font-extralight hidden group-hover:flex overflow-hidden w-full">We dont use cookies :)</p>
				<LiaCookieSolid className="w-fit h-full aspect-square flex-shrink-0"/>
			</div>
		</div>
	)
} 