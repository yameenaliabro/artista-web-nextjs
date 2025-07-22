import { DiscoverSection } from "./_sections/discover";
import { FreeSamplesSection } from "./_sections/free-samples";
import { HeroSection } from "./_sections/hero";

export default function RootPage() {
	return (
		<main>
			<HeroSection />
			<DiscoverSection />
			<FreeSamplesSection />
		</main>
	);
}
