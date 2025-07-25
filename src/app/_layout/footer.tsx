import Link from "next/link";

import { cn } from "~/lib/utils";
import { Container } from "./container";

export function Footer() {
	return (
		<footer>
			<div className={cn("bg-primary-1000 text-primary-foreground py-8")}>
				<Container className="flex flex-col md:flex-row items-center justify-between gap-6">
					<p className="text-center md:text-left">
						Copyright ⓒ ArtistaBrands, 2025. All rights reserved.
					</p>
					<nav>
						<ul className="flex items-center gap-6">
							<li>
								<Link href="#" className="border-b-[0.5px] text-sm">
									Terms
								</Link>
							</li>
							<li>
								<Link href="#" className="border-b-[0.5px] text-sm">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="border-b-[0.5px] text-sm">
									Cookies Policy
								</Link>
							</li>
						</ul>
					</nav>
				</Container>
			</div>
		</footer>
	);
}
