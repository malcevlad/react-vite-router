import React from 'react';
import { Typography, TypographyProps } from './Typography';

export const withTypography = (defaultValue: TypographyProps['value']) => {
	const WrappedTypography: React.FC<TypographyProps> = ({ value = defaultValue, ...props }) => {
		return <Typography value={value} {...props} />;
	};

	return WrappedTypography;
};