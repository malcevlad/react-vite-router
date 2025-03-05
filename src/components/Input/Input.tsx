import React from 'react';
import cl from './Input.module.scss'

type InputProps = {
	type: string;
	value: string | number;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = ({type, value, onChange, placeholder}) => {
	return (
		<input
			className={cl.input}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}></input>
	);
}

export default Input;