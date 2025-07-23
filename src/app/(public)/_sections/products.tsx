"use client";

import Autoplay from "embla-carousel-autoplay";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Ratings } from "~/components/blocks/ratings";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "~/components/ui/carousel";
import { formatCurrency } from "~/lib/currency";
import { calcDiscount } from "~/lib/discount";

const products: {
	id: string;
	pictureId: StaticImageData;
	name: string;
	slug: string;
	description?: string;
}[] = [
	{
		id: "1",
		pictureId: assets.images.home.category1.src,
		name: "LEVOLOR x Select Light Filtering Roller Shades",
		slug: "honeycomb-blinds",
		description: "LEVOLOR x Select Light Filtering Roller Shades",
	},
	{
		id: "2",
		pictureId: assets.images.home.category2.src,
		name: "LEVOLOR x Select Light Filtering Roller Shades",
		slug: "roller-blinds",
		description: "LEVOLOR x Select Light Filtering Roller Shades",
	},
	{
		id: "3",
		pictureId: assets.images.home.category3.src,
		name: "LEVOLOR x Select Light Filtering Roller Shades",
		slug: "roman-blinds",
		description: "LEVOLOR x Select Light Filtering Roller Shades",
	},
	{
		id: "4",
		pictureId: assets.images.home.category1.src,
		name: "LEVOLOR x Select Light Filtering Roller Shades",
		slug: "honeycomb-blinds",
		description: "LEVOLOR x Select Light Filtering Roller Shades",
	},
	{
		id: "5",
		pictureId: assets.images.home.category2.src,
		name: "LEVOLOR x Select Light Filtering Roller Shades",
		slug: "roller-blinds",
		description: "LEVOLOR x Select Light Filtering Roller Shades",
	},
	{
		id: "6",
		pictureId: assets.images.home.category3.src,
		name: "LEVOLOR x Select Light Filtering Roller Shades",
		slug: "roman-blinds",
		description: "LEVOLOR x Select Light Filtering Roller Shades",
	},
];

export function ProductsSection() {
	return (
		<section className="relative">
			<Container className="py-16 space-y-16">
				<div className="flex flex-col items-center text-center gap-8">
					<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
						<span className="text-primary-1000">Featured</span>{" "}
						<span className="text-primary">Products</span>
					</h2>
					<p className="max-w-2xl text-sm text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqut enim ad minim
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
						{products.map((category) => (
							<CarouselItem
								key={category.id}
								className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
							>
								<div className="px-3">
									<Card className="py-2 gap-2 border-none shadow-none group cursor-pointer">
										<CardHeader className="mx-2 px-0 relative aspect-square rounded-lg overflow-hidden">
											<Image
												src={category.pictureId}
												alt={category.name}
												className="size-full object-center object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
											/>
										</CardHeader>
										<CardContent className="px-2 space-y-2">
											<CardTitle className="text-xs">{category.name}</CardTitle>
											<Ratings rating={5} reviewsCount={3} />
										</CardContent>
										<CardFooter className="px-2 flex-col items-start">
											<p className="text-[0.5rem] text-primary-500">
												{calcDiscount(100, 88.54)}% Off
											</p>
											<p>
												<span className="text-primary-500 font-bold">
													{formatCurrency(88.54)}
												</span>{" "}
												<Link
													href={`/products/${category.slug}`}
													className="border-b border-primary-200 text-[0.65rem] text-primary-500"
												>
													Details
												</Link>
											</p>
											<p className="text-muted-foreground text-[0.5rem] font-medium">
												<span>MRSP</span>{" "}
												<span className="line-through">
													{formatCurrency(100)}
												</span>
											</p>
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
