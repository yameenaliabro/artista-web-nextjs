import Image from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";

const features = [
	{
		id: "1",
		title: "Custom Made",
		description:
			"Tailored precisely to your window’s exact dimensions - for a perfect fit every time.",
	},
	{
		id: "2",
		title: "Custom Made",
		description:
			"Tailored precisely to your window’s exact dimensions - for a perfect fit every time.",
	},
	{
		id: "3",
		title: "Custom Made",
		description:
			"Tailored precisely to your window’s exact dimensions - for a perfect fit every time.",
	},
	{
		id: "4",
		title: "Custom Made",
		description:
			"Tailored precisely to your window’s exact dimensions - for a perfect fit every time.",
	},
];

export function WhyChooseSection() {
	return (
		<section className="relative">
			<div className="absolute inset-0 -z-40 bg-primary-100/25" />
			<Container className="relative z-50 flex flex-col-reverse md:flex-row-reverse items-center gap-16 py-16">
				<div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center">
					<div className="space-y-6">
						<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
							<span>Why Choose</span>{" "}
							<span className="text-primary">Artista Blinds?</span>
						</h2>
						<p className="max-w-2xl text-lg">
							Every blind in made to fit your window precisely, down to the last
							inch
						</p>
						<ul className="space-y-6">
							{features.map((feature) => (
								<li key={feature.id} className="space-y-2">
									<h3 className="text-lg font-semibold">{feature.title}</h3>
									<p className="max-w-sm text-muted-foreground">
										{feature.description}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-1/2 md:h-full">
					<div className="aspect-[11/12] rounded-md overflow-hidden">
						<Image
							src={assets.images.home.whyChoose.src}
							alt={assets.images.home.whyChoose.alt}
							className="size-full object-center object-cover"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
