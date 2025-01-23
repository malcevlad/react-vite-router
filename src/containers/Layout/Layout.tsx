import React from 'react';
import Header from '@/containers/Header/Header.tsx';
import Footer from '@/containers/Footer/Footer.tsx';
import cl from './Layout.module.scss'

type LayoutProps = {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children })=> {
	return (
		<div className={cl.layout}>
			<Header/>
				<div className={cl.layoutChildren}>{children}</div>
			<Footer/>
		</div>
	)
}

export default Layout;