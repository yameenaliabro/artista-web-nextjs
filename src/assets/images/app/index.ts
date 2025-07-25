import Apple from "~/assets/images/app/icons8-apple-48.png";
import Facebook from "~/assets/images/app/icons8-facebook-48.png";
import Google from "~/assets/images/app/icons8-google-48.png";
import Outlook from "~/assets/images/app/icons8-outlook-48.png";
import LogoDark from "~/assets/images/app/logo-dark.png";
import LogoLight from "~/assets/images/app/logo-light.png";

export const app = {
	logo: {
		light: {
			src: LogoLight,
			alt: "Logo",
		},
		dark: {
			src: LogoDark,
			alt: "Logo",
		},
	},
	icons: {
		apple: {
			src: Apple,
			alt: "Apple",
		},
		google: {
			src: Google,
			alt: "Google",
		},
		facebook: {
			src: Facebook,
			alt: "Facebook",
		},
		outlook: {
			src: Outlook,
			alt: "Outlook",
		},
	},
};
