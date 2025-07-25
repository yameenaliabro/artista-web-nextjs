import Image from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Badge } from "~/components/ui/badge";

export function TitleSection() {
	return (
		<section className="relative">
			<Image
				src={assets.images.home.hero.src}
				alt={assets.images.home.hero.alt}
				className="absolute inset-0 -z-50 size-full object-center object-cover rotate-y-180"
			/>
			<div className="absolute inset-0 -z-40 bg-linear-90 from-white via-white/75 to-white/0" />
			<Container className="relative z-50 h-full flex flex-col justify-center py-16">
				<div>
					{/* <h4 className="text-lg text-secondary">ARTISTA BLINDS</h4> */}
					<Badge variant="secondary-inverse">ARTISTA BLINDS</Badge>
				</div>
				<div className="space-y-6">
					<h2 className="max-w-2xl -ml-1.5 text-4xl md:text-6xl font-bold">
						<span className="text-primary-900">Honeycomb Blinds</span>
					</h2>
				</div>
			</Container>
		</section>
	);
}
