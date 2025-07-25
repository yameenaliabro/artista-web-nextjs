"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "~/app/_layout/container";
import { assets } from "~/assets";
import { Button } from "~/components/ui/button";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

function useCountdown(targetDate: Date): TimeLeft {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const calculateTimeLeft = (): TimeLeft => {
			const difference = targetDate.getTime() - Date.now();

			if (difference > 0) {
				return {
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				};
			}

			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		};

		// Calculate initial time
		setTimeLeft(calculateTimeLeft());

		// Update every second
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return timeLeft;
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
	const timeLeft = useCountdown(targetDate);

	const formatNumber = (num: number): string => {
		return num.toString().padStart(2, "0");
	};

	return (
		<div className="flex items-center justify-center gap-4 my-8">
			{/* Days */}
			<div className="flex flex-col items-center">
				<div className="text-4xl md:text-6xl font-bold text-yellow-400">
					{formatNumber(timeLeft.days)}
				</div>
				<div className="text-xs md:text-sm text-white/80 uppercase tracking-wider">
					Days
				</div>
			</div>

			{/* Separator */}
			<div className="text-4xl md:text-6xl font-bold text-yellow-400 mx-2">
				:
			</div>

			{/* Hours */}
			<div className="flex flex-col items-center">
				<div className="text-4xl md:text-6xl font-bold text-yellow-400">
					{formatNumber(timeLeft.hours)}
				</div>
				<div className="text-xs md:text-sm text-white/80 uppercase tracking-wider">
					Hours
				</div>
			</div>

			{/* Separator */}
			<div className="text-4xl md:text-6xl font-bold text-yellow-400 mx-2">
				:
			</div>

			{/* Minutes */}
			<div className="flex flex-col items-center">
				<div className="text-4xl md:text-6xl font-bold text-yellow-400">
					{formatNumber(timeLeft.minutes)}
				</div>
				<div className="text-xs md:text-sm text-white/80 uppercase tracking-wider">
					Minutes
				</div>
			</div>

			{/* Separator */}
			<div className="text-4xl md:text-6xl font-bold text-yellow-400 mx-2">
				:
			</div>

			{/* Seconds */}
			<div className="flex flex-col items-center">
				<div className="text-4xl md:text-6xl font-bold text-yellow-400">
					{formatNumber(timeLeft.seconds)}
				</div>
				<div className="text-xs md:text-sm text-white/80 uppercase tracking-wider">
					Seconds
				</div>
			</div>
		</div>
	);
}

export function OfferSection() {
	// Set target date to 24 hours from now (you can adjust this as needed)
	const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

	return (
		<section className="relative">
			<Image
				src={assets.images.home.helpMeasureBg.src}
				alt={assets.images.home.helpMeasureBg.alt}
				className="absolute inset-0 -z-50 size-full object-center object-cover"
			/>
			<div className="absolute inset-0 -z-40 bg-primary-1000/80" />
			<Container className="relative z-50 py-8 flex flex-col justify-center items-center text-white">
				<div className="text-center">
					<h2 className="max-w-2xl -ml-1.5 text-2xl md:text-3xl font-semibold">
						25% Off On All Blind Styles
					</h2>
					<p className="font-medium mt-2">Ends in</p>
				</div>

				<CountdownTimer targetDate={targetDate} />

				<div className="flex items-center gap-6 mt-4">
					<Button variant="muted" size="lg">
						Grab This Deal
					</Button>
				</div>
			</Container>
		</section>
	);
}
