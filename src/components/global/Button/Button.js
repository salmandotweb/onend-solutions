import classes from "./Button.module.css";

const Button = ({ children, styles }) => {
	let buttonClassName = classes.button;

	if (styles) {
		buttonClassName = `${buttonClassName} ${styles}`;
	}

	return <button className={buttonClassName}>{children}</button>;
};

export default Button;
