"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
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
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "~/components/ui/input-otp";
import { pinSchema } from "~/lib/validators";

const VerifyCodeFormSchema = z.object({
	pin: pinSchema("Pin"),
});

export function VerifyCode() {
	const form = useForm<z.infer<typeof VerifyCodeFormSchema>>({
		resolver: zodResolver(VerifyCodeFormSchema),
		defaultValues: {
			pin: "",
		},
	});

	function onSubmit(data: z.infer<typeof VerifyCodeFormSchema>) {
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
								<CardTitle className="text-xl/tight">Verify Code</CardTitle>
								<CardDescription className="text-sm">
									We sent a verification code at tes************.com, please see
									your email to get a code.
								</CardDescription>
							</div>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="md:min-w-[400px] space-y-6"
								>
									<div>
										<FormField
											control={form.control}
											name="pin"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Code</FormLabel>
													<FormControl className="w-full">
														<InputOTP
															maxLength={6}
															{...field}
															className="w-full"
														>
															<InputOTPGroup className="gap-4">
																<InputOTPSlot index={0} className="w-14 h-10" />
																<InputOTPSlot index={1} className="w-14 h-10" />
																<InputOTPSlot index={2} className="w-14 h-10" />
																<InputOTPSlot index={3} className="w-14 h-10" />
																<InputOTPSlot index={4} className="w-14 h-10" />
																<InputOTPSlot index={5} className="w-14 h-10" />
															</InputOTPGroup>
														</InputOTP>
													</FormControl>
													<FormDescription className="text-xs text-right">
														<span>Resend OTP in</span>{" "}
														<span className="text-primary-500">01:00</span>
													</FormDescription>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div>
										<Button type="submit" size="lg" className="w-full">
											Verify
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
