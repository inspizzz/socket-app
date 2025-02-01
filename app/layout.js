import localFont from "next/font/local";
import "./globals.css";

import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { NoCookies } from "@/components/NoCookies/NoCookies";

const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "QPlug",
	description: "A simple faulty socket scanning application initiative in exeter university by a student",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="relative bg-background">
					<TopBar />
					<NoCookies />

					
					{children}
					
				</div>


				<Footer />
			</body>


		</html>
	)
}
