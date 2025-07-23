"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Button } from "~/components/ui/button";
import {
	Form,
	FormControl,
	FormLabel,
	FormField,
	FormItem,
	FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

enum MountType {
	Inside = "Inside",
	Outside = "Outside",
}

const HelpMeasureSectionFormSchema = z.object({
	mountType: z.nativeEnum(MountType, {
		message: "Mount Type must be Inside or Outside",
	}),
	widthBeforeDecimals: z.coerce.number().min(1, {
		message: "Width must be at least 1 inch.",
	}),
	widthAfterDecimals: z.coerce.number().min(0, {
		message: "Width must be at least 0 inch.",
	}),
	heightBeforeDecimals: z.coerce.number().min(1, {
		message: "Height must be at least 1 inch.",
	}),
	heightAfterDecimals: z.coerce.number().min(0, {
		message: "Height must be at least 0 inch.",
	}),
});

export function HelpMeasureSection() {
	const form = useForm<z.infer<typeof HelpMeasureSectionFormSchema>>({
		resolver: zodResolver(HelpMeasureSectionFormSchema),
		defaultValues: {
			mountType: MountType.Inside,
			widthBeforeDecimals: 0,
			widthAfterDecimals: 0,
			heightBeforeDecimals: 0,
			heightAfterDecimals: 0,
		},
	});

	function onSubmit(data: z.infer<typeof HelpMeasureSectionFormSchema>) {
		toast("You submitted the following values", {
			description: (
				<pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<section className="relative">
			<Image
				src={assets.images.home.helpMeasureBg.src}
				alt={assets.images.home.helpMeasureBg.alt}
				className="absolute inset-0 -z-50 size-full object-center object-cover"
			/>
			<div className="absolute inset-0 -z-40 bg-primary-1000/80" />
			<Container className="relative z-50 flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 py-16">
				<div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center">
					<div className="space-y-6">
						<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
							<span className="text-white">Help Me</span>{" "}
							<span className="text-secondary">Measure</span>
						</h2>
						<p className="max-w-2xl text-white text-lg">
							Every blind in made to fit your window precisely, down to the last
							inch
						</p>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
								<div className="space-y-6">
									<h3 className="text-white font-semibold">
										Select Mount Type
									</h3>
									<div>
										<FormField
											control={form.control}
											name="mountType"
											render={({ field }) => (
												<FormItem className="space-y-3">
													<FormControl>
														<RadioGroup
															onValueChange={field.onChange}
															className="flex "
														>
															<FormItem className="space-y-3">
																<Image
																	src={assets.images.home.blindInside.src}
																	alt={assets.images.home.blindInside.alt}
																	className="size-24 object-center object-cover"
																/>
																<div className="flex items-center gap-3">
																	<FormControl>
																		<RadioGroupItem
																			value={MountType.Inside}
																			className="bg-white"
																		/>
																	</FormControl>
																	<FormLabel className="text-white">
																		<span>Inside</span>
																	</FormLabel>
																</div>
															</FormItem>
															<FormItem className="space-y-3">
																<Image
																	src={assets.images.home.blindOutside.src}
																	alt={assets.images.home.blindOutside.alt}
																	className="size-24 object-center object-cover"
																/>
																<div className="flex items-center gap-3">
																	<FormControl>
																		<RadioGroupItem
																			value={MountType.Outside}
																			className="bg-white"
																		/>
																	</FormControl>
																	<FormLabel className="text-white">
																		<span>Outside</span>
																	</FormLabel>
																</div>
															</FormItem>
														</RadioGroup>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>
								<div className="space-y-6">
									<h3 className="text-white font-semibold">
										Enter Measurements
									</h3>
									<div className="flex items-baseline gap-6">
										<FormField
											control={form.control}
											name="widthBeforeDecimals"
											render={({ field }) => (
												<FormItem className="flex-1">
													<FormLabel className="text-white/75 text-xs">
														Width (Inches)
													</FormLabel>
													<FormControl>
														<Input
															type="number"
															className="bg-white"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="widthAfterDecimals"
											render={({ field }) => (
												<FormItem className="flex-1">
													<FormLabel className="opacity-0">.</FormLabel>
													<FormControl>
														<Input
															type="number"
															className="bg-white"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className="flex items-baseline gap-6">
										<FormField
											control={form.control}
											name="heightBeforeDecimals"
											render={({ field }) => (
												<FormItem className="flex-1">
													<FormLabel className="text-white/75 text-xs">
														Height (Inches)
													</FormLabel>
													<FormControl>
														<Input
															type="number"
															className="bg-white"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="heightAfterDecimals"
											render={({ field }) => (
												<FormItem className="flex-1">
													<FormLabel className="opacity-0">.</FormLabel>
													<FormControl>
														<Input
															type="number"
															className="bg-white"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>
								<div>
									<Button type="submit">Save Size</Button>
								</div>
							</form>
						</Form>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-1/2 md:h-full">
					<div className="aspect-[11/12] rounded-md overflow-hidden">
						<Image
							src={assets.images.home.helpMeasureBlind.src}
							alt={assets.images.home.helpMeasureBlind.alt}
							className="size-full object-center object-cover"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
