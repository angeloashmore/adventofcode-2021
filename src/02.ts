export function one(input: string) {
	const cs = input
		.split("\n")
		.slice(0, -1)
		.map(
			(line) =>
				[line.split(" ")[0][0], parseInt(line.split(" ")[1])] as [
					"f" | "u" | "d",
					number,
				],
		);

	return (
		cs.reduce((a, c) => a + (c[0][0] === "f" ? c[1] : 0), 0) *
		cs.reduce(
			(a, c) => (c[0] === "u" ? a - c[1] : c[0] === "d" ? a + c[1] : a),
			0,
		)
	);
}

export function two(input: string) {
	const cs = input
		.split("\n")
		.slice(0, -1)
		.map(
			(line) =>
				[line.split(" ")[0][0], parseInt(line.split(" ")[1])] as [
					"f" | "u" | "d",
					number,
				],
		);

	let aim = 0;
	let horizontal = 0;
	let depth = 0;

	for (const [d, amount] of cs) {
		if (d === "d") {
			aim += amount;
		} else if (d === "u") {
			aim -= amount;
		} else {
			horizontal += amount;
			depth += aim * amount;
		}
	}

	return horizontal * depth;
}
