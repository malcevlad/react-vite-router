import React from 'react';
import Anchor from '@/components/Anchor/Anchor.tsx';
import clsx from "clsx";
import cl from './Footer.module.scss'

type FooterProps = {
	className?: string;
}

const Footer:React.FC<FooterProps> = ({className})=> {
	return (
		<footer className={clsx(className, cl.footer)}>
			<div className="logo">MyApp</div>
			<nav className="menu">
				<Anchor href="/" anchorType='link'>Home</Anchor>
				<Anchor href="/login" anchorType='link'>Login</Anchor>
				<Anchor href="/register" anchorType='link'>Register</Anchor>
			</nav>
		</footer>
	)
}
export default Footer;