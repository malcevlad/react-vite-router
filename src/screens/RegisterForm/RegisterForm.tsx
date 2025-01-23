import React, {useState} from 'react';
import Input from '@/components/Input/Input.tsx';
import Button from '@/components/Button/Button.tsx';
import Card from '@/containers/Card/Card.tsx';
import { Title } from '@/components/Typorgaphy/Typography.tsx';
import { registerApi } from '@/api/registerApi.ts';

type RegisterFormProps = {
	onSubmit?: () => void;
}

const RegisterForm:React.FC<RegisterFormProps> = ({onSubmit}) => {

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<Card>
			<Title value='h1'>Register</Title>
			<form onSubmit={onSubmit}>
				<Input
					type="text"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value)
					}}
					placeholder="your name"
				/>
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
				<Input
					type="password"
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value)
					}}
					placeholder="confirm your password"
				/>
				<Button text='register' buttonType='button'/>
			</form>
		</Card>
	)
}

export default RegisterForm;