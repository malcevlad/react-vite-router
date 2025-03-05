import Main from '@/pages/Main.tsx';
import { Login } from '@/pages/Login.tsx';
import { Register } from '@/pages/Register.tsx';

export const routes = [
	{
		index: true,
		element: <Main />
	},
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: 'register',
		element: <Register />,
	},
];
