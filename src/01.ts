export function one(input: string) {
	const d = input.split("\n").map((l) => parseInt(l));

	return d.reduce((a, c, i) => (c > d[--i] ? ++a : a), 0);
}

export function two(input: string) {
	const d = input.split("\n").map((l) => parseInt(l));

	return d.reduce(
		(a, c, i) => (d[++i] + d[++i] + c > d[--i] + d[--i] + d[--i] ? ++a : a),
		0,
	);
}
