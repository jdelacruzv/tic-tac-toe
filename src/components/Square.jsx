import style from './Square.module.css';

const Square = ({ value, onClick }) => {
	/* const squareRendered =  */
	
	return (
		<button className={style.square} onClick={onClick}>
			{value}
		</button>
	)
};

export default Square;
