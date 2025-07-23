import Image from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";

export function HelpMeasureSection() {
	return (
		<section className="relative">
			<Image
				src={assets.images.home.helpMeasureBg.src}
				alt={assets.images.home.helpMeasureBg.alt}
				className="absolute inset-0 -z-50 size-full object-center object-cover"
			/>
			<div className="absolute inset-0 -z-40 bg-primary-1000/80" />
			<Container className="relative z-50 flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 py-16">
				<div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center">
					<div className="space-y-6">
						<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
							<span className="text-white">Help Me</span>{" "}
							<span className="text-secondary">Measure</span>
						</h2>
						<p className="max-w-2xl text-white text-lg">
							Every blind in made to fit your window precisely, down to the last
							inch
						</p>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-1/2 md:h-full">
					<div className="aspect-[11/12] rounded-md overflow-hidden">
						<Image
							src={assets.images.home.helpMeasureBlind.src}
							alt={assets.images.home.helpMeasureBlind.alt}
							className="size-full object-center object-cover"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
