"use client";

import Autoplay from "embla-carousel-autoplay";
import Image, { type StaticImageData } from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Card, CardContent, CardFooter, CardTitle } from "~/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "~/components/ui/carousel";

const homeBlinds: {
	id: string;
	pictureId: StaticImageData;
	name: string;
	slug: string;
	description?: string;
}[] = [
	{
		id: "1",
		pictureId: assets.images.home.category1.src,
		name: "Honeycomb Blinds",
		slug: "honeycomb-blinds",
		description: "Honeycomb Blinds",
	},
	{
		id: "2",
		pictureId: assets.images.home.category2.src,
		name: "Roller Blinds",
		slug: "roller-blinds",
		description: "Roller Blinds",
	},
	{
		id: "3",
		pictureId: assets.images.home.category3.src,
		name: "Roman Blinds",
		slug: "roman-blinds",
		description: "Roman Blinds",
	},
	{
		id: "4",
		pictureId: assets.images.home.category1.src,
		name: "Honeycomb Blinds",
		slug: "honeycomb-blinds",
		description: "Honeycomb Blinds",
	},
	{
		id: "5",
		pictureId: assets.images.home.category2.src,
		name: "Roller Blinds",
		slug: "roller-blinds",
		description: "Roller Blinds",
	},
	{
		id: "6",
		pictureId: assets.images.home.category3.src,
		name: "Roman Blinds",
		slug: "roman-blinds",
		description: "Roman Blinds",
	},
];

export function HomeBlindsSection() {
	return (
		<section className="relative">
			<Container className="py-16 space-y-16">
				<div className="flex flex-col items-center text-center gap-8">
					<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
						<span className="text-primary-1000">Home Blinds</span>{" "}
						<span className="text-primary">Collection</span>
					</h2>
					<p className="max-w-2xl text-sm text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
					</p>
				</div>
				<Carousel
					opts={{
						align: "start",
					}}
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
				>
					<CarouselContent>
						{homeBlinds.map((category) => (
							<CarouselItem
								key={category.id}
								className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
							>
								<div className="px-3">
									<Card className="py-2 gap-2 group cursor-pointer bg-primary-100/25">
										<CardContent className="relative aspect-square mx-2 px-0 rounded-lg overflow-hidden">
											<Image
												src={category.pictureId}
												alt={category.name}
												className="size-full object-center object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
											/>
										</CardContent>
										<CardFooter className="px-2">
											<CardTitle className="text-primary text-xl">
												{category.name}
											</CardTitle>
										</CardFooter>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</Container>
		</section>
	);
}
