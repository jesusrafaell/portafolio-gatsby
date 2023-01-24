import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import Main from '../components/Main';
import Projects from '../components/Projects';
import About from '../components/About';
import { Canvas } from '@react-three/fiber';
import Box from '../components/threejs/Box';

const IndexPage: React.FC<PageProps> = () => (
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
		<section id='threejs' className='relative'>
			<Canvas>
				<ambientLight />
				<pointLight position={[8, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				{/* <Triangle /> */}
			</Canvas>
		</section>
		,
	</Layout>
);

export default IndexPage;
