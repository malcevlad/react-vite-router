import React from 'react';
import Anchor from '@/components/Anchor/Anchor.tsx';
import clsx from "clsx";
import cl from './Header.module.scss'

type HeaderProps = {
	className?: string;
}

const Header:React.FC<HeaderProps> = ({className})=> {
	return (
		<header className={clsx(className, cl.header)}>
			<div className="logo">MyApp</div>
			<nav className='menu'>
				<Anchor href="/" anchorType='link'>Home</Anchor>
				<Anchor href="/login" anchorType='link'>Login</Anchor>
				<Anchor href="/register" anchorType='link'>Register</Anchor>
			</nav>
		</header>
	)
}
export default Header