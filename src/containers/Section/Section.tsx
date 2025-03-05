import React from 'react';

type SectionProps = {
	children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({children}) => {
	return <div className="section">{children}</div>
}

export default Section;