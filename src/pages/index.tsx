import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import Main from '../components/Main';
import Projects from '../components/Projects';
import About from '../components/About';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<section id='main' className='h:bg-[#111]'>
				<Main />
			</section>
			<section id='project' className='relative'>
				<Projects />
			</section>
			<section id='about' className='relative'>
				<About />
			</section>
		</Layout>
	);
};

export default IndexPage;
