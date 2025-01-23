import React from 'react';
import { withTypography } from '@/components/Typorgaphy/withTypography.tsx';

type TypographyValues = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TypographyProps = {
	value: TypographyValues;
	children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Typography: React.FC<TypographyProps> = ({ value, children, ...props }) => {
	const Tag = value; // Выбор HTML-тега
	return (
		<Tag {...props}>
			{children}
		</Tag>
	);
};
export const Title = withTypography('h1');
export const Text = withTypography('p');