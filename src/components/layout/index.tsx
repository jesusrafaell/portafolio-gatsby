import React, { ReactNode } from 'react';
import CustomCursor from '../CustomCursor';
import Navbar from '../navbar';
import SEO from '../SEO';
import '../../styles/global.scss';

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<main>
			<SEO lang='en' Title='JesusRafaell' />
			<CustomCursor />
			<Navbar />
			<div id='content'>{children}</div>
		</main>
	);
};

export default Layout;
