import { CTASection } from "./_sections/cta";
import { DiscoverCategoriesSection } from "./_sections/discover-categories";
import { FreeSamplesSection } from "./_sections/free-samples";
import { HeroSection } from "./_sections/hero";
import { HomeBlindsSection } from "./_sections/home-blinds";

export default function RootPage() {
	return (
		<main>
			<HeroSection />
			<DiscoverCategoriesSection />
			<FreeSamplesSection />
			<HomeBlindsSection />
			<CTASection />
		</main>
	);
}
