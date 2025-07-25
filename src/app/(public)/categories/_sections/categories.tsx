import type { StaticImageData } from "next/image";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { ProductCard } from "~/components/blocks/product-card";

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
				<aside className="w-1/4"></aside>
				<ul className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<li key={product.id}>
							<ProductCard product={product} />
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
