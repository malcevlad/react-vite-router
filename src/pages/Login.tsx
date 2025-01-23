import Layout from '@/containers/Layout/Layout.tsx';
import Section from '@/containers/Section/Section.tsx';
import Card from '@/containers/Card/Card.tsx';
import LoginForm from '@/screens/LoginForm/LoginForm.tsx';
import { useEffect, useState } from 'react';
import { loginApi, loginApiData } from '@/api/loginApi.ts';


export function Login() {

	const [data, setData] = useState<loginApiData | null>(null);

	useEffect(() => {
		loginApi()
			.then((response) => {setData(response)})
			.catch((err) =>
				console.log(err)
			);
	}, []);

	return (
		<Layout>
			<Section>
				<Card>
					<LoginForm />
					{data && <div>{data.message}</div>}
				</Card>
			</Section>
		</Layout>
	)
}

export default Login;