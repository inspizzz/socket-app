'use client'

import { Loading } from "@/components/Loading"
import { createSuggestion } from "@/firebase/firebase";
import Link from "next/link";
import { useState } from "react"
import { GiSentryGun } from "react-icons/gi";


export default function SuggestionPage() {
	const [content, setContent] = useState("")
	const [submitting, setSubmitting] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState(false)

	const submit = (e) => {
		e.preventDefault()

		setSubmitting(true)

		console.log("attempiting")

		createSuggestion(content).then((result) => {
			if (result) {
				console.log("things")
				setSubmitted(true)
				setSubmitting(false)
			} else {
				console.log("not things")
				setSubmitting(false)
				setError(true)
			}
		})
	}

	return (
		<div className="w-full h-screen flex justify-center items-center">
			{
				!submitting ? (
					<div className="w-full h-full flex justify-center items-center">
						{
							!submitted ? (
								<form className="w-1/4 h-fit shadow-xl bg-white flex flex-col justify-start items-center pt-4" onSubmit={submit}>
									<h1 className="text-xl font-extrabold">Suggestion / Bug Report</h1>

									<div className="w-full h-fit flex flex-col gap-2 p-2">
										<textarea className="w-full h-40 border border-slate-400 bg-slate-100 p-2" placeholder="Enter your suggestion or bug report here" onChange={(e) => setContent(e.target.value)} />
										<button className="w-full h-10 bg-accent text-white font-bold">Submit</button>
									</div>
								</form >
							) : (
								<div className="w-full h-full flex flex-col justify-center items-center">
									{
										!error ? (
											<div className="w-1/4 h-fit shadow-xl bg-white flex flex-col justify-start items-center p-4">
												<h1 className="text-xl font-extrabold">Thank you for your feedback!</h1>

												<div className="w-full h-fit flex gap-2">
													<GiSentryGun />

													<div className="w-full">

													</div>
												</div>

												<div className="w-full h-fit flex justify-center items-center gap-4">
													<button href="/suggestion" className="w-fit h-fit px-2 py-1 bg-primary" onClick={() => { setContent(""); setSubmitted(false) }}>Submit another</button>
													<Link href="/" className="w-fit h-fit px-2 py-1 bg-secondary">Home</Link>
												</div>
											</div>
										) : (
											<div className="w-1/4 h-fit shadow-xl bg-white flex flex-col justify-start items-center p-2">
												<div className="w-full flex justify-start">
													<button className="px-2 py-1 rounded-full bg-red-400" onClick={() => {setError(false); setContent(""); setSubmitted(false)}}>
														<p>Try again</p>
													</button>
												</div>

												<Loading message="An error occurred" />
											</div>
										)
									}
								</div>
							)
						}
					</div>

				) : (
					<div className="w-1/4 h-fit shadow-xl bg-white flex flex-col justify-start items-center">
						<Loading message="submitting" />
					</div>
				)
			}
		</div >
	)
}