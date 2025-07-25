import { HeartIcon } from "lucide-react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Ratings } from "./ratings";
import { calcDiscount } from "~/lib/discount";
import { formatCurrency } from "~/lib/currency";

interface ProductCardProps {
	product: {
		id: string;
		pictureId: StaticImageData;
		name: string;
		slug: string;
		description?: string;
	};
}

export function ProductCard({ product }: Readonly<ProductCardProps>) {
	return (
		<Card className="py-2 gap-2 border-none shadow-none group cursor-pointer">
			<CardHeader className="mx-2 px-0 relative aspect-square rounded-lg overflow-hidden">
				<Badge
					variant="accent"
					className="absolute top-4 left-4 z-20 px-2 py-1 rounded-xs"
				>
					New
				</Badge>
				<Button
					variant="outline"
					size="icon"
					className="absolute top-4 right-4 z-20 border-none rounded-md"
				>
					<HeartIcon />
				</Button>
				<Image
					src={product.pictureId}
					alt={product.name}
					className="z-10 size-full object-center object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
				/>
			</CardHeader>
			<CardContent className="px-2 space-y-2">
				{/* TODO */}
				<div />
				<CardTitle className="text-xs">{product.name}</CardTitle>
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
						href={`/products/${product.slug}`}
						className="border-b border-primary-200 text-[0.65rem] text-primary-500"
					>
						Details
					</Link>
				</p>
				<p className="text-muted-foreground text-[0.5rem] font-medium">
					<span>MRSP</span>{" "}
					<span className="line-through">{formatCurrency(100)}</span>
				</p>
			</CardFooter>
		</Card>
	);
}
