import style from './Button.module.css';

const Button = ({ handleClick }) => (
	<button className={style.reset} onClick={handleClick}>
		play again
	</button>
);

export default Button;
