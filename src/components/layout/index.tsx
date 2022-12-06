import React from 'react';
import CustomCursor from '../customCursor';
import Navbar from '../navbar';
import SEO from './seo';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<SEO lang='en' />
			<CustomCursor />
			<Navbar />
			<div id='content'>{children}</div>
		</>
	);
};

export default Layout;
