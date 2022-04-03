import { useState } from 'react';
import Button from './Button';
import Square from './Square';
import style from './Board.module.css';

const calculateWinner = squares => {
	const LINES = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < LINES.length; i++) {
		const [a, b, c] = LINES[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};

const initialSquares = {
	squares: Array(9).fill(null),
	xIsNext: true
};

const Board = () => {
	const [state, setState] = useState(initialSquares);

	const handleClickReset = () => setState({ ...initialSquares });

	const handleClickSquares = i => {
		// Crea una copia de state (initialSquares)
		const squares = state.squares.slice();
		if (calculateWinner(squares) || squares[i]) return;
		squares[i] = state.xIsNext ? 'X' : 'O';
		setState({ squares, xIsNext: !state.xIsNext });
	};

	const titleStatus = () => {
		const winner = calculateWinner(state.squares);
		return (winner) ? `Winner: ${winner}` : `Next player: ${state.xIsNext ? 'X' : 'O'}`;
	};

	const renderSquare = i => <Square value={state.squares[i]} onClick={() => handleClickSquares(i)} />;

	return (
		<div>
			<h1 className={style.status}>{titleStatus()}</h1>
			<div className={style.boardRow}>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className={style.boardRow}>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className={style.boardRow}>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
			<Button value={'play again'} onClick={handleClickReset} />
		</div>
	);
};

export default Board;
