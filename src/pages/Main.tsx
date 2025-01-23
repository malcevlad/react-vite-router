import Layout from '@/containers/Layout/Layout.tsx';
import Section from '@/containers/Section/Section.tsx';
import Button from '@/components/Button/Button.tsx';
import { useEffect, useState } from 'react';
import Modal from '@/containers/Modal/Modal.tsx';
import Login from '@/pages/Login.tsx';
import LoginForm from '@/screens/LoginForm/LoginForm.tsx';
import RegisterForm from '@/screens/RegisterForm/RegisterForm.tsx';
import { Title, Typography } from '@/components/Typorgaphy/Typography.tsx';
import { loginApi } from '@/api/loginApi.ts';
import { mainApi, MainApiData } from '@/api/mainApi.ts';

const Main = ()=> {

	const [isLoginOpen, setLoginOpen] = useState(false);
	const [isRegisterOpen, setRegisterOpen] = useState(false);
	const [data, setData] = useState<MainApiData | null>(null);

	useEffect(() => {
		mainApi()
			.then((response) => {setData(response)})
			.catch((err) =>
				console.log(err)
			);
	}, []);

	return (
		<Layout>
			<Section>
				<Title value='h1'>Home Page</Title>
				<div style={{display: 'flex', gap: '10px'}}>
					<Button
						onClick={() => setLoginOpen(true)}
						text='login'
						buttonType='button'
					/>
					<Button
						onClick={() => setRegisterOpen(true)}
						text='register'
						buttonType='button'
					/>
				</div>

				{isLoginOpen && (
					<Modal onClose={() => setLoginOpen(false)}>
						<LoginForm onSubmit={() => setLoginOpen(false)}/>
					</Modal>
				)}

				{isRegisterOpen && (
					<Modal onClose={() => setRegisterOpen(false)}>
						<RegisterForm onSubmit={() => setRegisterOpen(false)}/>
					</Modal>
				)}
				{data && <div>{data.message}</div>}
			</Section>
		</Layout>
	)
}
export default Main;