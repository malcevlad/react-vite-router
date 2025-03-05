import React from 'react';
import clsx from "clsx";
import cl from './Button.module.scss'

type ButtonProps = {
	onClick?: () => void;
	text: string;
	className?: string;
	buttonType: 'a' | 'button'
}

const Button: React.FC<ButtonProps> = ({onClick, buttonType, text, className}) => {

	if (buttonType === 'button') {
		return <button className={clsx(className, cl.button)} onClick={onClick}>{text}</button>;
	} else {
		return <a className={clsx(className, cl.button)} onClick={onClick}>{text}</a>;
	}

}
export default Button;