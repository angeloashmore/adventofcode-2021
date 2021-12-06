export function one(input: string) {
	const m = input
		.split("\n")
		.filter(Boolean)
		.map((line) => line.split(/ -> |,/).map((n) => parseInt(n)))
		.filter(([x1, y1, x2, y2]) => x1 === x2 || y1 === y2)
		.reduce<Record<string, number>>((acc, [x1, y1, x2, y2]) => {
			let x = x1;
			let y = y1;

			while (true) {
				acc[`${x},${y}`] = (acc[`${x},${y}`] || 0) + 1;

				if (x === x2 && y === y2) {
					break;
				}

				x += x1 === x2 ? 0 : x1 < x2 ? 1 : -1;
				y += y1 === y2 ? 0 : y1 < y2 ? 1 : -1;
			}

			return acc;
		}, {});

	return Object.values(m).filter((f) => f > 1).length;
}

export function two(input: string) {
	const m = input
		.split("\n")
		.filter(Boolean)
		.map((line) => line.split(/ -> |,/).map((n) => parseInt(n)))
		.reduce<Record<string, number>>((acc, [x1, y1, x2, y2]) => {
			let x = x1;
			let y = y1;

			while (true) {
				acc[`${x},${y}`] = (acc[`${x},${y}`] || 0) + 1;

				if (x === x2 && y === y2) {
					break;
				}

				x += x1 === x2 ? 0 : x1 < x2 ? 1 : -1;
				y += y1 === y2 ? 0 : y1 < y2 ? 1 : -1;
			}

			return acc;
		}, {});

	return Object.values(m).filter((f) => f > 1).length;
}
