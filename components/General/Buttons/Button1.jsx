'use client'

import Link from "next/link";

export function Button1({ children, href="", callback=() => null }) {
	return href != "" ? (
		<Link href={href} className="bg-accent font-extrabold border transition-all duration-200 flex justify-center items-center text-white">
			{children}
		</Link>
	) : (
		<button onClick={() => callback} className="bg-accent font-extrabold transition-all duration-200 flex justify-center items-center text-white">
			{children}
		</button>
	)
}