import type { PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

interface ContainerProps extends PropsWithChildren {
	className?: string;
}

export function Container({ children, className }: ContainerProps) {
	return (
		<div className={cn("max-w-7xl mx-auto px-4 md:px-12", className)}>
			{children}
		</div>
	);
}
