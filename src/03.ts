export function one(input: string) {
	const lines = input.split("\n").slice(0, -1);

	const mcb: number[] = [];

	for (let i = 0; i < lines[0].length; i++) {
		mcb[i] =
			lines.reduce((acc, line) => acc + parseInt(line[i]), 0) >=
			lines.length / 2
				? 1
				: 0;
	}

	return (
		parseInt(mcb.join(""), 2) * parseInt(mcb.map((x) => x ^ 1).join(""), 2)
	);
}

export function two(input: string) {
	let lines = input.split("\n").slice(0, -1);

	let o2 = lines;
	let co2 = lines;

	for (let i = 0; i < lines[0].length; i++) {
		if (o2.length > 1) {
			const mcv =
				o2.reduce((acc, line) => acc + parseInt(line[i]), 0) >= o2.length / 2
					? "1"
					: "0";

			o2 = o2.filter((line) => line[i] === mcv);
		}

		if (co2.length > 1) {
			const lcv =
				co2.reduce((acc, line) => acc + parseInt(line[i]), 0) >= co2.length / 2
					? "0"
					: "1";

			co2 = co2.filter((line) => line[i] === lcv);
		}
	}

	return parseInt(o2[0], 2) * parseInt(co2[0], 2);
}
