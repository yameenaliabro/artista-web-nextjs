"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { assets } from "~/assets";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { passwordSchema } from "~/lib/validators";

const CreatePasswordFormSchema = z.object({
	password: passwordSchema("Password"),
	confirmPassword: passwordSchema("Confirm Password"),
});

export function CreatePassword() {
	const form = useForm<z.infer<typeof CreatePasswordFormSchema>>({
		resolver: zodResolver(CreatePasswordFormSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(data: z.infer<typeof CreatePasswordFormSchema>) {
		toast("You submitted the following values", {
			description: (
				<pre className="mt-2 w-[320px] rounded-md bg-white p-4">
					<code className="text-black">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<section className="relative h-[110vh]">
			<div className="absolute inset-0 -z-40 bg-primary-100/15" />
			<div className="h-full flex gap-8">
				<div className="flex-1 flex flex-col justify-center items-center lg:items-end 2xl:items-center">
					<Card className="2xl:ml-48 gap-8">
						<CardHeader className="space-y-6">
							<Button variant="muted" size="icon" className="rounded-md">
								<ArrowLeftIcon />
							</Button>
							<div>
								<CardTitle className="text-xl/tight">
									Create a password
								</CardTitle>
								<CardDescription className="text-sm">
									Secure your store with a strong password for enhanced
									protection and peace of mind.
								</CardDescription>
							</div>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="min-w-[400px] space-y-6"
								>
									<div>
										<FormField
											control={form.control}
											name="password"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Password</FormLabel>
													<FormControl>
														<div className="relative">
															<Input
																className="peer pe-9"
																placeholder="********"
																{...field}
															/>
															<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
																<EyeIcon size={20} aria-hidden="true" />
															</div>
														</div>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div>
										<FormField
											control={form.control}
											name="confirmPassword"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Confirm Password</FormLabel>
													<FormControl>
														<div className="relative">
															<Input
																className="peer pe-9"
																placeholder="********"
																{...field}
															/>
															<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
																<EyeIcon size={20} aria-hidden="true" />
															</div>
														</div>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div>
										<Button type="submit" size="lg" className="w-full">
											Continue
										</Button>
									</div>
								</form>
							</Form>
						</CardContent>
						<CardFooter className="flex-col text-[0.65rem] font-medium">
							<p className="">
								By continuing, you agree to our{" "}
								<Link href={"#"} className="text-primary-500">
									Terms of Use
								</Link>{" "}
								and{" "}
								<Link href={"#"} className="text-primary-500">
									Privacy Policy.
								</Link>
							</p>
							<p>
								Already have an account?{" "}
								<Link href={"#"} className="text-primary-500">
									Sign Up
								</Link>
							</p>
						</CardFooter>
					</Card>
				</div>
				<div className="flex-1 relative hidden lg:block m-4 rounded-xl overflow-hidden">
					<Image
						src={assets.images.auth.login.src}
						alt={assets.images.auth.login.alt}
						className="size-full object-center object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
