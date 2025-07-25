import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assets } from "~/assets";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

import { Container } from "./container";

export function Footer() {
	return (
		<footer>
			<div className={cn("bg-primary-1000 text-primary-foreground py-12")}>
				<Container>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
						{/* Logo and Description */}
						<div className="space-y-6">
							<Image
								src={assets.images.app.logo.light.src}
								alt={assets.images.app.logo.light.alt}
								className="w-36"
							/>
							<p className="text-sm text-primary-foreground/80 max-w-xs">
								Lorem ipsum dolor sit amet consectetur. Scelerisque vitae et
								vitae suspendisse vulputate vestibulum tortor nisl cursus.
								Egestas nulla nulla in
							</p>
							<div className="flex items-center gap-4">
								<Link
									href="#"
									className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
									aria-label="Facebook"
								>
									<SiFacebook className="w-5 h-5 text-white" />
								</Link>
								<Link
									href="#"
									className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
									aria-label="Instagram"
								>
									<SiInstagram className="w-5 h-5 text-white" />
								</Link>
								<Link
									href="#"
									className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
									aria-label="Twitter"
								>
									<SiX className="w-5 h-5 text-white" />
								</Link>
							</div>
						</div>

						{/* Services */}
						<div className="space-y-6">
							<h3 className="text-lg font-semibold text-primary-foreground">
								Services
							</h3>
							<ul className="space-y-3">
								<li>
									<Link
										href="#"
										className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
									>
										Size Guide
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
									>
										Gift Cards
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
									>
										Blind Card Tips
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
									>
										Style Guide
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
									>
										Makeover Ideas
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
									>
										Customer Stories
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact Information */}
						<div className="space-y-6">
							<h3 className="text-lg font-semibold text-primary-foreground">
								Contact Information
							</h3>
							<ul className="space-y-4">
								<li className="flex items-center gap-3">
									<Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
									<span className="text-sm text-primary-foreground/80">
										abc@mail.com
									</span>
								</li>
								<li className="flex items-center gap-3">
									<Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
									<span className="text-sm text-primary-foreground/80">
										+0001234567B
									</span>
								</li>
								<li className="flex items-start gap-3">
									<MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
									<span className="text-sm text-primary-foreground/80">
										Lorem Ipsum Dummy text
									</span>
								</li>
							</ul>
						</div>
					</div>
				</Container>

				<Separator className="my-8 bg-muted-foreground/50" />

				<Container className="flex flex-col md:flex-row items-center justify-between gap-6">
					<p className="text-center md:text-left text-sm text-primary-foreground/80">
						Copyright © ArtistaBrands, 2025. All rights reserved.
					</p>
					<nav>
						<ul className="flex items-center gap-6">
							<li>
								<Link
									href="#"
									className="border-b-[0.5px] text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
								>
									Terms
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="border-b-[0.5px] text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="border-b-[0.5px] text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
								>
									Cookies Policy
								</Link>
							</li>
						</ul>
					</nav>
				</Container>
			</div>
		</footer>
	);
}
