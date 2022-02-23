import { useState } from "react";
import "./App.css";

const Square = ({ value, onClick }) => {
	return (
		<button className="square" onClick={onClick}>
			{value}
		</button>
	);
};

const Board = () => {
	const [state, setState] = useState({
		squares: Array(9).fill(null),
		xIsNext: true,
	});

	const handleClick = (i) => {
		//
		const squares = state.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = state.xIsNext ? "X" : "O";
		setState({
			squares, // squares: squares,
			xIsNext: !state.xIsNext,
		});
	};

	const winner = calculateWinner(state.squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (state.xIsNext ? "X" : "O");
	}

	const renderSquare = (i) => {
		return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
	};

	return (
		<div>
			<div className="status">{status}</div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
};

const calculateWinner = (squares) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};

const Game = () => {
	return (
		<div className="game">
			<div className="game-board">
				<Board />
			</div>
		</div>
	);
};

export default Game;
