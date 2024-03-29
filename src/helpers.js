export const calculateWinner = (squares) => {
	const LINES = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	// Si hay un ganador devolverá 'X', 'O' o 'null'
	for (let i = 0; i < LINES.length; i++) {
		const [a, b, c] = LINES[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[(a, b, c)];
			// return { squares: [a, b, c] };
			// return {
			// 	player: squares[a],
			// 	squares: [a, b, c]
			// };
		}
	}

	return null;
};
