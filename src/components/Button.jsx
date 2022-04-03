import style from './Button.module.css';

const Button = ({ value, onClick }) => (
	<div className={style.btnContainer}>
		<button className={style.btnReset} onClick={onClick}>
			{value}
		</button>
	</div>
);

export default Button;
