"use client";

import Autoplay from "embla-carousel-autoplay";
import Image, { type StaticImageData } from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from "~/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "~/components/ui/carousel";

const series: {
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
		description:
			"Lorem ipsum dolor sit amet, consectet uipisicing elit, sed do eiusmod tempor incididunt ut labore ",
	},
	{
		id: "2",
		pictureId: assets.images.home.category2.src,
		name: "Roller Blinds",
		slug: "roller-blinds",
		description:
			"Lorem ipsum dolor sit amet, consectet uipisicing elit, sed do eiusmod tempor incididunt ut labore ",
	},
	{
		id: "3",
		pictureId: assets.images.home.category3.src,
		name: "Roman Blinds",
		slug: "roman-blinds",
		description:
			"Lorem ipsum dolor sit amet, consectet uipisicing elit, sed do eiusmod tempor incididunt ut labore ",
	},
	{
		id: "4",
		pictureId: assets.images.home.category1.src,
		name: "Honeycomb Blinds",
		slug: "honeycomb-blinds",
		description:
			"Lorem ipsum dolor sit amet, consectet uipisicing elit, sed do eiusmod tempor incididunt ut labore ",
	},
	{
		id: "5",
		pictureId: assets.images.home.category2.src,
		name: "Roller Blinds",
		slug: "roller-blinds",
		description:
			"Lorem ipsum dolor sit amet, consectet uipisicing elit, sed do eiusmod tempor incididunt ut labore ",
	},
	{
		id: "6",
		pictureId: assets.images.home.category3.src,
		name: "Roman Blinds",
		slug: "roman-blinds",
		description:
			"Lorem ipsum dolor sit amet, consectet uipisicing elit, sed do eiusmod tempor incididunt ut labore ",
	},
];

export function YourChoiceSection() {
	return (
		<section className="relative">
			<Container className="py-16 space-y-16">
				<div className="flex flex-col items-center text-center gap-8">
					<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
						<span className="text-primary-1000">It’s All About</span>{" "}
						<span className="text-primary">Your Choice!</span>
					</h2>
					<p className="max-w-5xl text-sm text-muted-foreground">
						Choosing the right blinds shouldn’t be complicated it should feel
						easy and personal. That’s why we’ve got a variety of styles, from
						blinds to classic verticals and modern venetians. Whether you’re
						updating a single room or giving your whole space a fresh look,
						you’ll find something that fits just right. It’s all about what
						works best for your home, and we’re here to help you find it.
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
						{series.map((category) => (
							<CarouselItem
								key={category.id}
								className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
							>
								<div className="px-3">
									<Card className="py-2 gap-2 group cursor-pointer bg-primary-500/25">
										<CardContent className="relative aspect-[16/11] mx-2 px-0 rounded-lg overflow-hidden">
											<Image
												src={category.pictureId}
												alt={category.name}
												className="size-full object-center object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
											/>
										</CardContent>
										<CardFooter className="px-2 flex-col items-start">
											<CardTitle className="text-xl">{category.name}</CardTitle>
											<CardDescription className="text-xs">
												{category.description}
											</CardDescription>
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
