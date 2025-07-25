"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { assets } from "~/assets";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
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

const NewPasswordFormSchema = z.object({
	password: passwordSchema("Password"),
	confirmPassword: passwordSchema("Confirm Password"),
});

export function NewPassword() {
	const form = useForm<z.infer<typeof NewPasswordFormSchema>>({
		resolver: zodResolver(NewPasswordFormSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(data: z.infer<typeof NewPasswordFormSchema>) {
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
							<Image
								src={assets.images.app.logo.src}
								alt={assets.images.app.logo.alt}
								className="w-36"
							/>
							<div>
								<CardTitle className="text-xl/tight">
									Set New Password
								</CardTitle>
								<CardDescription className="text-sm">
									Oh! you forget the password? Don’t worry, we will help you to
									reset password.
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
											Set Password
										</Button>
									</div>
								</form>
							</Form>
						</CardContent>
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
