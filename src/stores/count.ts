import { Store } from "@tanstack/react-store";

export const countStore = new Store({
	count: 0,
});

export function increment() {
	countStore.setState((prev) => {
		if (prev.count >= 10) return prev;

		return { count: prev.count + 1 };
	});
}

export function decrement() {
	countStore.setState((prev) => {
		if (prev.count <= 0) return prev;

		return { count: prev.count - 1 };
	});
}
