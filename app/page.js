'use client'

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="w-full h-fit flex flex-col justify-start items-center no-scrollbar scroll-smooth">
			<div className="flex flex-col justify-center items-center w-full h-screen px-[15%]" id="page-1">
				<div className="flex justify-center items-center w-full h-full">
					<div className="w-1/3">
						<Image src="/plug.avif" width={500} height={500} className="w-full h-fit object-contain top-0 left-0" alt="a" />
					</div>

					<div className="w-1/2 flex flex-col gap-8 max-md:gap-2">
						<div>
							<h1 className="text-8xl max-md:text-2xl font-extrabold">Study <span className="text-primary">more</span></h1>
							<h1 className="text-8xl max-md:text-2xl font-extrabold pl-16 max-md:pl-8 text-nowrap"><span className="text-accent">worry</span> less</h1>
						</div>

						<Link href={"/report"} className="w-fit h-fit px-4 py-2 bg-primary rounded-full text-2xl max-md:text-sm font-extrabold text-white hover:animate-pulse">Get Scanning!</Link>
					</div>
				</div>
			</div>
		</div>
	)
}