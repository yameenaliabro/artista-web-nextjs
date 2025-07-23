import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Input } from "~/components/ui/input";

export function DiscountDealSection() {
	return (
		<section className="relative">
			<div className="absolute inset-0 -z-40 bg-primary-100/25" />
			<Container className="relative z-50 flex flex-col-reverse md:flex-row-reverse items-center gap-16 py-16">
				<div className="w-full md:w-2/5 h-2/5 md:h-full flex flex-col justify-center">
					<div className="space-y-6">
						<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
							<span>Enjoy 40% Savings</span>
						</h2>
						<p className="max-w-2xl text-lg">
							Accumsan montes nascetur tempor proin penatibus ligula curae eu
							metus maximus fringilla primis finibus nunc
						</p>
						<div className="flex items-center gap-6">
							<div className="w-full">
								<div className="relative">
									<Input
										type="email"
										className="pe-32 py-6 bg-white"
										placeholder="Email Address"
									/>
									<button
										type="button"
										className="text-xs text-primary-500 hover:text-primary focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-32 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
										aria-label="Subscribe"
									>
										<span>Subscribe</span>
										<ArrowRightCircle size={12} className="ml-1" />
									</button>
								</div>
							</div>
						</div>
						<p className="max-w-2xl text-lg">
							*By Submitting this form, you agree to receive Furiforma’s email
							newsletter  and promotional offers. Terms and Conditions Apply
						</p>
					</div>
				</div>
				<div className="w-full md:w-3/5 h-3/5 md:h-full">
					<div className="aspect-[12/9] rounded-md overflow-hidden">
						<Image
							src={assets.images.home.discountDeal.src}
							alt={assets.images.home.discountDeal.alt}
							className="size-full object-center object-cover"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
