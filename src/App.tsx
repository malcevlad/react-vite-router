import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import { LinkProvider } from '@/components/Anchor/AnchorProvider.tsx';

function LayoutWrapper() {
	return <Outlet />;
}

const router = createBrowserRouter([
	{
		element: <LayoutWrapper />,
		children: publicRoutes,
	},
]);

function App() {
	return (
				<RouterProvider router={router} />
	);
}

export default App;
