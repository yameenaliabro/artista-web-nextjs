import Image from "next/image";
import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Button } from "~/components/ui/button";

export function FreeSamplesSection() {
	return (
		<section className="relative">
			<div className="absolute inset-0 -z-40 bg-primary-100/25" />
			<Container className="relative z-50 flex flex-col-reverse md:flex-row items-center gap-24 md:gap-12 py-24 md:py-36">
				<div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center">
					<div className="space-y-6">
						<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
							<span className="text-primary">Get Free </span>{" "}
							<span className="text-secondary">Samples</span>
						</h2>
						<p className="max-w-2xl text-lg">
							Choosing the right blinds with seeing them up close. that’s why we
							offer free samples so yu can feel the fabric., see the colors in
							your wn spac, and be sure before your buying. Pick your favorites,
							and we’ll send them straight to your soor, completely free.
						</p>
						<div className="flex items-center gap-6">
							<Button variant="primary" size="lg">
								Get Now
							</Button>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-1/2 md:h-full">
					<div className="relative aspect-[3/4] w-2/3 mx-auto">
						<div className="absolute inset-0 z-20 rounded-4xl overflow-hidden translate-y-6 md:translate-y-8 -translate-x-12 md:-translate-x-20">
							<Image
								src={assets.images.home.sample1.src}
								alt={assets.images.home.sample1.alt}
								className="size-full object-center object-cover"
							/>
						</div>
						<div className="absolute inset-0 z-10 rounded-4xl overflow-hidden -translate-y-6 md:-translate-y-8 translate-x-12 md:translate-x-20">
							<Image
								src={assets.images.home.sample2.src}
								alt={assets.images.home.sample2.alt}
								className="size-full object-center object-cover"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
