'use client'

import React, { useState } from 'react'
import './Timeline.css'

const Timeline = () => {
	const [hoveredDot, setHoveredDot] = useState(null)

	const events = [
		{ id: 1, date: new Date("2025-01-01"), description: 'Start of term 2'},
		{ id: 2, date: new Date("2025-02-01"), description: 'Platform release and sticker invasion'},
		{ id: 3, date: new Date("2025-03-01"), description: 'Concept verification check'},
		{ id: 4, date: new Date("2025-04-01"), description: 'Final concept verification check'},
		{ id: 5, date: new Date("2025-05-01"), description: 'Exam season, higher usage expectations'},
		{ id: 6, date: new Date("2025-06-01"), description: 'Product review by UoE IT Department'},
		{ id: 7, date: new Date("2025-09-01"), description: "Next Academic Year" }
	]

	return (
		<div className="relative min-w-full min-h-screen">
			
		</div>
	)
}

export default Timeline
