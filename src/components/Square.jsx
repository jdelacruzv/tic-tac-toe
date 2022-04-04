import style from './Square.module.css';

const Square = ({ value, onClick }) => (
	<button className={style.square} onClick={onClick}>
		{value}
	</button>
);

export default Square;
