import { CTASection } from "./_sections/cta";
import { DiscountDealSection } from "./_sections/discount-deal";
import { DiscoverCategoriesSection } from "./_sections/discover-categories";
import { FreeSamplesSection } from "./_sections/free-samples";
import { HelpMeasureSection } from "./_sections/help-measure";
import { HeroSection } from "./_sections/hero";
import { HomeBlindsSection } from "./_sections/home-blinds";
import { OfferSection } from "./_sections/offer";
import { OurBlindsSection } from "./_sections/our-blinds";
import { ProductsSection } from "./_sections/products";
import { WhyChooseSection } from "./_sections/why-choose";

export default function RootPage() {
	return (
		<main>
			<HeroSection />
			<OfferSection />
			<DiscoverCategoriesSection />
			<FreeSamplesSection />
			<HelpMeasureSection />
			<WhyChooseSection />
			<ProductsSection />
			<HomeBlindsSection />
			<OurBlindsSection />
			<DiscountDealSection />
			<CTASection />
		</main>
	);
}
