import { Container } from "~/app/_layout/container";
import { cn } from "~/lib/utils";

export function Header() {
	return (
		<header>
			<div
				className={cn("bg-primary text-primary-foreground text-center py-2")}
			>
				<Container>
					<p className="text-sm md:text-base">
						Stylish Blinds, Timeless Design, Comfort Guaranteed
					</p>
				</Container>
			</div>
			{/* <nav>
				<Container></Container>
			</nav>
			<div className={cn("bg-primary-100/25 py-6")}>
				<Container className="flex justify-center">
					<NavigationMenu viewport={false}>
						<NavigationMenuList className="lg:gap-4 xl:gap-8">
							<NavigationMenuItem>
								<NavigationMenuLink>Window Blinds</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Curtains</NavigationMenuTrigger>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>New Arrivals</NavigationMenuTrigger>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Motorized Blinds</NavigationMenuTrigger>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink>Blackout</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink>Collections</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Sale</NavigationMenuTrigger>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink>Guide</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</Container>
			</div> */}
		</header>
	);
}
