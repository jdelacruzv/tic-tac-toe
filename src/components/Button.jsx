import style from './Button.module.css';

const Button = ({ value, onClick }) => (
	<button className={style.reset} onClick={onClick}>
		{value}
	</button>
);

export default Button;
