import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { geistMono, geistSans } from "~/lib/fonts";
import { Footer } from "./_layout/footer";
import { Header } from "./_layout/header";
import { RootProvider } from "./provider";

import "~/styles/globals.css";

export const metadata: Metadata = {
	title: process.env.NEXT_PUBLIC_APP_NAME,
	description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<RootProvider>
					<Header />
					{children}
					<Footer />
				</RootProvider>
			</body>
		</html>
	);
}
