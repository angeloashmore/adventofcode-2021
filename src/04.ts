export function one(input: string) {
	const lines = input.split("\n").filter(Boolean);

	const ds = lines[0].split(",");

	const bs: string[][][] = [];
	for (let i = 0; i < lines.length - 1; i++) {
		if (i % 5 === 0) {
			bs.push([]);
		}

		bs[bs.length - 1].push(lines[i + 1].trim().split(/\s+/));
	}

	const drawsToWin = bs.map((rs) => {
		const cs: string[][] = [];

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				cs[i] = [...(cs[i] || []), rs[j][i]];
			}
		}

		return Math.min(
			...rs.map((r) => Math.max(...r.map((n) => ds.findIndex((d) => d === n)))),
			...cs.map((c) => Math.max(...c.map((n) => ds.findIndex((d) => d === n)))),
		);
	});

	const drawsUntilWinner = Math.min(...drawsToWin);
	const winner = bs[drawsToWin.findIndex((d) => d === drawsUntilWinner)];

	const winnerScore = winner
		.reduce((acc, curr) => [...acc, ...curr], [])
		.filter((number) => ds.findIndex((d) => d === number) > drawsUntilWinner)
		.reduce((acc, curr) => acc + parseInt(curr), 0);

	return winnerScore * parseInt(ds[drawsUntilWinner]);
}

export function two(input: string) {
	const lines = input.split("\n").filter(Boolean);

	const ds = lines[0].split(",");

	const bs: string[][][] = [];
	for (let i = 0; i < lines.length - 1; i++) {
		if (i % 5 === 0) {
			bs.push([]);
		}

		bs[bs.length - 1].push(lines[i + 1].trim().split(/\s+/));
	}

	const drawsToWin = bs.map((rs) => {
		const cs: string[][] = [];

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				cs[i] = [...(cs[i] || []), rs[j][i]];
			}
		}

		return Math.min(
			...rs.map((r) => Math.max(...r.map((n) => ds.findIndex((d) => d === n)))),
			...cs.map((c) => Math.max(...c.map((n) => ds.findIndex((d) => d === n)))),
		);
	});

	const drawsUntilLastWinner = Math.max(...drawsToWin);
	const lastWinner =
		bs[drawsToWin.findIndex((d) => d === drawsUntilLastWinner)];

	const lastWinnerScore = lastWinner
		.reduce((acc, curr) => [...acc, ...curr], [])
		.filter(
			(number) => ds.findIndex((d) => d === number) > drawsUntilLastWinner,
		)
		.reduce((acc, curr) => acc + parseInt(curr), 0);

	return lastWinnerScore * parseInt(ds[drawsUntilLastWinner]);
}
