"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
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
import { Separator } from "~/components/ui/separator";

const LoginFormSchema = z.object({
	email: z.string().email({
		message: "Email must be a valid email address.",
	}),
});

export function Login() {
	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: "",
		},
	});

	function onSubmit(data: z.infer<typeof LoginFormSchema>) {
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
						<CardHeader className="space-y-8">
							<Image
								src={assets.images.app.logo.src}
								alt={assets.images.app.logo.alt}
								className="w-36"
							/>
							<CardTitle className="max-w-48 text-2xl/tight">
								Welcome to the Artista Blinds
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-6"
								>
									<div>
										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Email</FormLabel>
													<FormControl>
														<div className="relative">
															<Input
																className="peer pe-9"
																placeholder="Email"
																{...field}
															/>
															<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
																<MailIcon size={16} aria-hidden="true" />
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
											Get Started
										</Button>
									</div>
								</form>
							</Form>
							<Separator className="my-6" />
							<div className="flex justify-center gap-3">
								<Button
									variant="outline"
									size="icon"
									className="mt-4 border border-solid border-muted"
								>
									<Image
										src={assets.images.app.icons.apple.src}
										alt={assets.images.app.icons.apple.alt}
										className="size-7"
									/>
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="border border-solid border-muted"
								>
									<Image
										src={assets.images.app.icons.google.src}
										alt={assets.images.app.icons.google.alt}
										className="size-7"
									/>
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="mt-4 border border-solid border-muted"
								>
									<Image
										src={assets.images.app.icons.facebook.src}
										alt={assets.images.app.icons.facebook.alt}
										className="size-7"
									/>
								</Button>
							</div>
						</CardContent>
						<CardFooter className="flex-col text-[0.65rem] font-medium px-16">
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
									Sign In
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
