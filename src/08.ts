export function one(input: string): number {
	const segments = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

	const entries = input.split(/(?:\w+\s){10}\|\s|\s/g).filter(Boolean);

	return entries.reduce(
		(acc, curr) =>
			[segments[1], segments[4], segments[7], segments[8]].includes(curr.length)
				? ++acc
				: acc,
		0,
	);
}

//       xxxx
//      x    fa
//      x    fa
//       xxxx
//      x    fa
//      x    fa
//       xxxx

export function two(input: string): number {
	const segments = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

	const x = input
		.split("\n")
		.filter(Boolean)
		.map((line) => {
			const values = line.split(/\s|\|/g).filter(Boolean);

			const segmentSignals: Set<string>[] = [
				new Set(),
				new Set(),
				new Set(),
				new Set(),
				new Set(),
				new Set(),
				new Set(),
			];

			const ones = values.filter((value) => value.length === segments[1]);
			for (const value of ones) {
				for (const char of value) {
					segmentSignals[2].add(char);
				}
				for (const char of value) {
					segmentSignals[5].add(char);
				}
			}

			const sevens = values.filter((value) => value.length === segments[7]);
			for (const value of sevens) {
				const possible0 = value
					.split("")
					.filter(
						(char) =>
							!segmentSignals[2].has(char) && !segmentSignals[5].has(char),
					);

				for (const char of possible0) {
					segmentSignals[0].add(char);
				}

				if (possible0.length > 1) {
					for (const char of possible0) {
						segmentSignals[2].add(char);
					}
					for (const char of possible0) {
						segmentSignals[5].add(char);
					}
				}
			}

			const four = values.filter((value) => value.length === segments[4]);
			for (const value of four) {
				const possible1_3 = value
					.split("")
					.filter(
						(char) =>
							!segmentSignals[0].has(char) &&
							!segmentSignals[2].has(char) &&
							!segmentSignals[5].has(char),
					);

				for (const char of possible1_3) {
					segmentSignals[1].add(char);
					segmentSignals[3].add(char);
				}
			}

			const nine = values.filter((value) => value.length === segments[9]);
			for (const value of nine) {
				const possible6 = value
					.split("")
					.filter(
						(char) =>
							!segmentSignals[0].has(char) &&
							!segmentSignals[1].has(char) &&
							!segmentSignals[2].has(char) &&
							!segmentSignals[3].has(char) &&
							!segmentSignals[5].has(char),
					);

				for (const char of possible6) {
					segmentSignals[6].add(char);
				}
			}

			return segmentSignals;
		});

	return x.map((x) =>
		x.map((set, i) => `${i}: ${[...set.values()].join(", ")}`),
	);

	// return entries.reduce(
	// 	(acc, curr) =>
	// 		[segments[1], segments[4], segments[7], segments[8]].includes(curr.length)
	// 			? ++acc
	// 			: acc,
	// 	0,
	// );
}
