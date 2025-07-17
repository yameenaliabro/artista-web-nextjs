import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { geistMono, geistSans } from "~/lib/fonts";

import "~/styles/globals.css";

export const metadata: Metadata = {
	title: "Next App",
	description: "Next App",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
