export default function ColorPage() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-96 h-fit flex text-center flex-col border border-black p-1">
				<div className="bg-primary">Primary</div>
				<div className="bg-secondary">Secondary</div>
				<div className="bg-accent">Accent</div>
				<div className="bg-primary text-text">Text</div>
				<div className="bg-primary text-text_reverse">Text Reverse</div>
				<div className="bg-background">Background</div>
			</div>
		</div>
	)
}