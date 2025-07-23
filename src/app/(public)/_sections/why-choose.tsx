import Image from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";

const features = [
	{
		id: "1",
		icon: assets.images.home.icons.customMode,
		title: "Cuastom Made",
		description:
			"Tailored precisely to your window’s exact dimensions - for a perfect fit every time.",
	},
	{
		id: "2",
		icon: assets.images.home.icons.fastDelivery,
		title: "Custom Made",
		description:
			"Tailored precisely to your window’s exact dimensions - for a perfect fit every time.",
	},
	{
		id: "3",
		icon: assets.images.home.icons.fairPricing,
		title: "Custom Made",
		description:
			"Tailored precisely to your window’s exact dimensions - for a perfect fit every time.",
	},
	{
		id: "4",
		icon: assets.images.home.icons.easyDIY,
		title: "Custom Made",
		description:
			"Tailored precisely to your window’s exact dimensions - for a perfect fit every time.",
	},
];

export function WhyChooseSection() {
	return (
		<section className="relative">
			<div className="absolute inset-0 -z-40 bg-primary-100/25" />
			<Container className="relative z-50 flex flex-col-reverse md:flex-row-reverse items-center gap-16 md:gap-24 py-16">
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
								<li key={feature.id} className="flex items-center gap-12">
									<div className="size-16 p-3 border-[1.5px] border-primary bg-primary-100/25 rounded-full">
										<Image
											src={feature.icon.src}
											alt={feature.icon.alt}
											className="size-full object-center object-cover"
										/>
									</div>
									<div className="space-y-2">
										<h3 className="text-lg font-semibold">{feature.title}</h3>
										<p className="max-w-sm text-muted-foreground">
											{feature.description}
										</p>
									</div>
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
