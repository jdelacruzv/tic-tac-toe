import { useState } from 'react';
import Button from './Button';
import Square from './Square';
import { calculateWinner } from '../helpers';
import style from './Board.module.css';

const initialSquares = {
	squares: Array(9).fill(null),
	xIsNext: true
};

const Board = () => {
	const [state, setState] = useState(initialSquares);

	const handleResetClick = () => setState({ ...initialSquares });

	const titleStatus = () => {
		const winner = calculateWinner(state.squares);
		
		return winner
			? `Winner: ${winner}`
			: !state.squares.includes(null)
					? `Draw`
					: `Next player: ${state.xIsNext ? 'X' : 'O'}`;
	};

	const handleSquaresClick = (i) => {
		// Crea una copia del array squares del objeto initialSquares
		const squares = state.squares.slice();		
		// Ignora el click si alguien ganó o si un cuadrado está rellenado
		if (calculateWinner(squares) || squares[i]) return;
		squares[i] = state.xIsNext ? 'X' : 'O';
		setState({
			squares,
			xIsNext: !state.xIsNext
		});
		
	};

	// Obtiene las claves del array squares del objeto initialSquares
	const positions = Object.keys(state.squares);

	return (
		<div className={style.board}>
			<h1 className={style.title}>{titleStatus()}</h1>
			<div className={style.grid}>
				{positions.map(position => (
					<Square
						key={position}
	
						value={state.squares[position]}
						handleClick={() => handleSquaresClick(position)}
					/>
				))}
			</div>
			{calculateWinner(state.squares) 
				? <Button handleClick={() => handleResetClick()} />
				: !state.squares.includes(null) && <Button handleClick={() => handleResetClick()} />
			}
		</div>
	);
};

export default Board;