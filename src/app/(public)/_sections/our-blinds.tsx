import Image from "next/image";
import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Button } from "~/components/ui/button";

export function OurBlindsSection() {
	return (
		<section className="relative">
			<div className="absolute inset-0 -z-40 bg-secondary-100" />
			<div className="relative z-50 flex flex-col-reverse md:flex-row items-center">
				<Container className="w-full md:w-1/2 h-1/2 md:h-full py-16 flex flex-col justify-center items-end">
					<div className="space-y-6">
						<h2 className="max-w-2xl -ml-1.5 text-3xl md:text-5xl font-bold">
							<span>View Our Blinds</span>
						</h2>
						<p className="max-w-2xl md:max-w-lg text-lg">
							Sem elit at laoreet placerat congue urna sem. " Awesome Team" Nam
							luctus mauris nostra nisl lacinia elit penatibus senectus.
							Habitant etiam velit praesent, ridiculus consequat in natoque
							amet. Sodales porttitor quisque tellus himenaeos justo justo
							luctus enim taciti cinia elit penatibus senectus. Habitant ecinia
							elit penatibus senectus. Habitant ecinia elit penatibus senectus.
							Habitant e.
						</p>
						<div className="flex items-center gap-6">
							<Button variant="outline" size="lg" className="">
								Grab This Deal
							</Button>
						</div>
					</div>
				</Container>
				<div className="w-full md:w-1/2 h-1/2 md:h-full">
					<div className="aspect-[12/9] overflow-hidden">
						<Image
							src={assets.images.home.ourBlinds.src}
							alt={assets.images.home.ourBlinds.alt}
							className="size-full object-center object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
