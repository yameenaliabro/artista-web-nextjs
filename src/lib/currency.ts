export function formatCurrency(
	value: number,
	locale: string = "en-US",
	currency: string = "USD",
	options?: Intl.NumberFormatOptions,
) {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
		...options,
	}).format(value);
}
