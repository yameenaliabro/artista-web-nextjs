export function calcDiscount(mrsp: number, price: number) {
	return Math.floor(((mrsp - price) / mrsp) * 100);
}
