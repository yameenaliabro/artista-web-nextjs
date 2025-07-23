import Image from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Button } from "~/components/ui/button";

export function HeroSection() {
	return (
		<section className="relative h-[calc(100vh-6rem)]">
			<Image
				src={assets.images.home.hero.src}
				alt={assets.images.home.hero.alt}
				className="absolute inset-0 -z-50 size-full object-center object-cover rotate-y-180"
			/>
			<div className="absolute inset-0 -z-40 bg-linear-90 from-white via-white/75 to-white/0" />
			<Container className="relative z-50 h-full flex flex-col justify-center py-16">
				<div>
					<h4 className="text-lg text-secondary">ARTISTA BLINDS</h4>
				</div>
				<div className="space-y-6">
					<h2 className="max-w-2xl -ml-1.5 text-5xl md:text-7xl font-bold">
						<span className="text-primary">Custom</span>{" "}
						<span className="text-primary-1000">Window Blinds Made</span>{" "}
						<span className="text-secondary">Simple</span>
					</h2>
					<p className="max-w-2xl">
						Stylish, functional, and affordable blinds for every space. Designed
						to fit your windows perfectly.
					</p>
					<div className="flex items-center gap-6">
						<Button variant="primary" size="lg">
							View Collection
						</Button>
						<Button variant="outline" size="lg" className="">
							Explore
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
