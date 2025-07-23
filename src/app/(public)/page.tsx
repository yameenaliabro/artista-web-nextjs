import { CTASection } from "./_sections/cta";
import { DiscountDealSection } from "./_sections/discount-deal";
import { DiscoverCategoriesSection } from "./_sections/discover-categories";
import { FreeSamplesSection } from "./_sections/free-samples";
import { HeroSection } from "./_sections/hero";
import { HomeBlindsSection } from "./_sections/home-blinds";
import { OurBlindsSection } from "./_sections/our-blinds";
import { ProductsSection } from "./_sections/products";

export default function RootPage() {
	return (
		<main>
			<HeroSection />
			<DiscoverCategoriesSection />
			<FreeSamplesSection />
			<ProductsSection />
			<HomeBlindsSection />
			<OurBlindsSection />
			<DiscountDealSection />
			<CTASection />
		</main>
	);
}
