import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Footer } from "../_layout/footer";
import { Header } from "../_layout/header";

export const metadata: Metadata = {
	title: process.env.NEXT_PUBLIC_APP_NAME,
	description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
