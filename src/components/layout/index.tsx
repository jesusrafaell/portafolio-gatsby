import React from 'react';
import CustomCursor from '../CustomCursor';
import Navbar from '../navbar';
import SEO from './SEO';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<SEO lang='en' Title='JesusRafaell' />
			<CustomCursor />
			<Navbar />
			<div id='content'>{children}</div>
		</>
	);
};

export default Layout;
