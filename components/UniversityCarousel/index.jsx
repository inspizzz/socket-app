export function UniversityCarousel() {
	return (
		<div className="relative w-full h-fit flex justify-evenly">
			<div className="absolute left-0 w-screen flex justify-evenly">
				{
					[1, 2, 3, 4, 5, 6].map((thing, index) => {
						return (
							<div key={index} className="w-16 h-28 bg-red-600">
							</div>
						)
					})
				}
			</div>
		</div>
	)
}