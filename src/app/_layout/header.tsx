import { Container } from "~/app/_layout/container";
import { cn } from "~/lib/utils";

export function Header() {
	return (
		<header>
			<div className={cn("bg-primary text-primary-foreground text-center p-2")}>
				<Container>
					<p>Stylish Blinds, Timeless Design, Comfort Guaranteed</p>
				</Container>
			</div>
			<nav>
				<Container className={"flex justify-between items-center px-2 py-4"}>
					<h1>Logo</h1>
					<ul></ul>
				</Container>
			</nav>
		</header>
	);
}
