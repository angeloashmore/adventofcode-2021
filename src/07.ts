export function one(input: string): number {
	const positions = input.split(",").map((n) => parseInt(n));

	const fuel: number[] = [];

	for (let i = 0; i < positions.length; i++) {
		fuel[i] = positions.reduce((acc, curr) => acc + Math.abs(curr - i), 0);
	}

	return Math.min(...fuel);
}

export function two(input: string): number {
	const positions = input.split(",").map((n) => parseInt(n));

	const fuel: number[] = [];

	for (let i = 0; i < positions.length; i++) {
		fuel[i] = positions.reduce((acc, curr) => {
			const n = Math.abs(curr - i);

			return acc + (n ** 2 + n) / 2;
		}, 0);
	}

	return Math.min(...fuel);
}
