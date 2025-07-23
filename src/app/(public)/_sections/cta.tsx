"use client";

import Image from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Button } from "~/components/ui/button";

export function CTASection() {
	return (
		<section className="relative">
			<Image
				src={assets.images.home.cta.src}
				alt={assets.images.home.cta.alt}
				className="absolute inset-0 -z-50 size-full object-center object-cover"
			/>
			<div className="absolute inset-0 -z-40 bg-primary/35" />
			<Container className="py-16 space-y-16">
				<div className="flex flex-col items-center text-center gap-8">
					<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
						<span className="text-accent-foreground">Not Sure Where to</span>{" "}
						<span className="text-secondary">Start?</span>
					</h2>
					<p className="max-w-2xl text-sm text-accent-foreground">
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqut enim ad minim
					</p>
					<Button variant="muted" size="lg">
						Get a Free Estimate
					</Button>
				</div>
			</Container>
		</section>
	);
}
