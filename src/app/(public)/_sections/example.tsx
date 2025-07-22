"use client";

import { useStore } from "@tanstack/react-store";

import { Button } from "~/components/ui/button";
import { countStore, decrement, increment } from "~/stores/count";

export function ExampleSection() {
	const { count } = useStore(countStore);

	return (
		<section>
			<h2>Examples</h2>
			<h3>Counter (State)</h3>
			<Button variant="outline" size="lg" onClick={increment}>
				Increment
			</Button>
			<p>Count: {count}</p>
			<Button variant="outline" size="lg" onClick={decrement}>
				Decrement
			</Button>
		</section>
	);
}
