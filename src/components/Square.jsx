import style from './Square.module.css';

const Square = ({ value, handleClick }) => (
	<button className={style.square} onClick={handleClick}>
		{value}
	</button>
);

export default Square;
