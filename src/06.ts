export function one(input: string): number {
	const state = input
		.split(",")
		.map((n) => parseInt(n))
		.reduce<number[]>((acc, curr) => {
			acc[curr] = (acc[curr] || 0) + 1;

			return acc;
		}, []);

	for (let i = 0; i < 80; i++) {
		const zero = state[0];

		for (let j = 0; j < 9; j++) {
			state[j] = state[j + 1] || 0;
		}

		state[state.length - 3] += zero;
		state[state.length - 1] += zero;
	}

	return state.reduce((acc, curr) => acc + curr);
}

export function two(input: string): number {
	const state = input
		.split(",")
		.map((n) => parseInt(n))
		.reduce<number[]>((acc, curr) => {
			acc[curr] = (acc[curr] || 0) + 1;

			return acc;
		}, []);

	for (let i = 0; i < 256; i++) {
		const zero = state[0];

		for (let j = 0; j < 9; j++) {
			state[j] = state[j + 1] || 0;
		}

		state[state.length - 3] += zero;
		state[state.length - 1] += zero;
	}

	return state.reduce((acc, curr) => acc + curr);
}
