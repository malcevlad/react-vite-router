import React, { useEffect, useState } from 'react';
import Input from '@/components/Input/Input.tsx';
import Button from '@/components/Button/Button.tsx';
import Card from '@/containers/Card/Card.tsx';
import { Title } from '@/components/Typorgaphy/Typography.tsx';

type LoginFormProps = {
	onSubmit?: () => void;
}

const LoginForm:React.FC<LoginFormProps> = ({onSubmit}) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Card>
			<Title value='h1'>Login</Title>
			<form onSubmit={onSubmit}>
				<Input
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
					placeholder="your email"
				/>
				<Input
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
					placeholder="your password"
				/>
				<Button text='login' buttonType='button'/>
			</form>
		</Card>
	)
}

export default LoginForm;