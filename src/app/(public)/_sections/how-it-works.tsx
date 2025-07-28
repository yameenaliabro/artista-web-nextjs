"use client";

import Image from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";

export function HowItWorksSection() {
	return (
		<section className="relative">
			<Image
				src={assets.images.home.howItWorksBg.src}
				alt={assets.images.home.howItWorksBg.alt}
				className="absolute inset-0 -z-50 size-full object-center object-cover"
			/>
			<div className="absolute inset-0 -z-40 bg-linear-90 from-white/90 via-white/70 to-white/80" />
			<Container className="py-16 space-y-16">
				<div className="flex flex-col items-center text-center gap-8">
					<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
						<span className="text-primary-1000">How it</span>{" "}
						<span className="text-primary">Works?</span>
					</h2>
					<p className="max-w-2xl text-sm text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqut enim ad minim
					</p>
				</div>
				<div>
					<div className="overflow-hidden">
						<Image
							src={assets.images.home.howItWorksDesktop.src}
							alt={assets.images.home.howItWorksDesktop.alt}
							className="size-full object-center object-cover hidden lg:block"
						/>
						<Image
							src={assets.images.home.howItWorksMobile.src}
							alt={assets.images.home.howItWorksMobile.alt}
							className="size-full object-center object-cover lg:hidden"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
