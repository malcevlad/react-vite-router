import React, { useEffect, useState } from 'react';
import Layout from '@/containers/Layout/Layout.tsx';
import Section from '@/containers/Section/Section.tsx';
import Input from '@/components/Input/Input.tsx';
import Button from '@/components/Button/Button.tsx';
import Card from '@/containers/Card/Card.tsx';
import RegisterForm from '@/screens/RegisterForm/RegisterForm.tsx';
import { registerApi, registerApiData } from '@/api/registerApi.ts';


export function Register() {

	const [data, setData] = useState<registerApiData | null>(null);

	useEffect(() => {
		registerApi()
			.then((response) => {setData(response)})
			.catch((err) =>
				console.log(err)
			);
	}, []);

	return (
		<Layout>
			<Section>
				<Card>
					<RegisterForm />
					{data && <div>{data.message}</div>}
				</Card>
			</Section>
		</Layout>
	)
}