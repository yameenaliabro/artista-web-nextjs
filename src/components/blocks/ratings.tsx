"use client";

import { StarIcon } from "lucide-react";
import { useId } from "react";

import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

interface RatingsProps {
	rating: number;
	reviewsCount?: number;
}

export function Ratings({ rating, reviewsCount }: Readonly<RatingsProps>) {
	const id = useId();

	return (
		<fieldset className="space-y-4">
			<RadioGroup className="inline-flex gap-1">
				{[1, 2, 3, 4, 5].map((value) => (
					<label
						key={value}
						htmlFor={`${id}-${value}`}
						className="has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative cursor-pointer rounded outline-none has-focus-visible:ring-[3px]"
					>
						<RadioGroupItem
							id={`${id}-${value}`}
							value={value.toString()}
							className="sr-only"
						/>
						<StarIcon
							size={14}
							className={`transition-all text-secondary ${
								(rating) >= value
									? "fill-secondary"
									: "fill-secondary-foreground"
							}`}
						/>
						<span className="sr-only">
							{value} star{value === 1 ? "" : "s"}
						</span>
					</label>
				))}
				<span className="text-[0.6rem]">
					{rating.toFixed(1)}{" "}
					{reviewsCount && `(${reviewsCount} Review${rating === 1 ? "" : "s"})`}
				</span>
			</RadioGroup>
		</fieldset>
	);
}
