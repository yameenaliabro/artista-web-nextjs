import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { mavenPro } from "~/lib/fonts";
import { RootProvider } from "./provider";

import "~/styles/globals.css";

export const metadata: Metadata = {
	title: process.env.NEXT_PUBLIC_APP_NAME,
	description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${mavenPro.className} antialiased`}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
