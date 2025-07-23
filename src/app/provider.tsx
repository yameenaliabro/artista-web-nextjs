import type { PropsWithChildren } from "react";

import { ThemeProvider } from "~/components/providers/theme";
import { Toaster } from "~/components/ui/sonner";

export function RootProvider({ children }: Readonly<PropsWithChildren>) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
		>
			{children}
			<Toaster />
		</ThemeProvider>
	);
}
