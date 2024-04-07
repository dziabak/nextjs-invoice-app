import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../styles/globals.css";

import { League_Spartan } from "next/font/google";
// import { cn } from "@/lib/utils";

const spartan = League_Spartan({ subsets: ["latin"], variable: "--spartan" });

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={spartan.className}>{children}</body>
		</html>
	);
}
