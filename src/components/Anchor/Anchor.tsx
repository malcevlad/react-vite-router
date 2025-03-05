import React from 'react';
import { Link } from 'react-router';

export type AnchorProps = {
	href: string;
	children?: React.ReactNode;
	anchorType: 'a' | 'link'
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor:React.FC<AnchorProps> = ({href, children, anchorType, ...props}) => {

	if (anchorType === 'link') {
		return <Link to={href} {...props}>{children}</Link>;
	} else {
		return <a href={href} {...props}>{children}</a>;
	}

}

export default Anchor