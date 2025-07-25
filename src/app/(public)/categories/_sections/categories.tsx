import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { ProductCard } from "~/components/blocks/product-card";
import { Button, buttonVariants } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
} from "~/components/ui/pagination";
import { cn } from "~/lib/utils";

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

export function CategoriesSection() {
	return (
		<section className="relative min-h-[100vh]">
			<Container className="py-16 flex gap-8">
				<aside className="hidden md:block w-1/4">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Filters</CardTitle>
						</CardHeader>
						<CardContent></CardContent>
						<CardFooter className="gap-3">
							<Button
								variant="outline"
								className="flex-1 rounded-md border-solid border-muted hover:border-neutral-500 text-destructive hover:text-destructive"
							>
								Reset Filter
							</Button>
							<Button variant="primary" className="flex-1 rounded-md">
								Apply
							</Button>
						</CardFooter>
					</Card>
				</aside>
				<div className="w-full md:w-3/4 space-y-12">
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
						{products.map((product) => (
							<li key={product.id}>
								<ProductCard product={product} />
							</li>
						))}
					</ul>
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationLink
									href="#"
									className={cn(
										buttonVariants({ variant: "primary" }),
										"hover:text-white rounded-md",
									)}
								>
									<ChevronLeftIcon />
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">2</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">3</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink
									href="#"
									className={cn(
										buttonVariants({ variant: "primary" }),
										"hover:text-white rounded-md",
									)}
								>
									<ChevronRightIcon />
								</PaginationLink>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</Container>
		</section>
	);
}
