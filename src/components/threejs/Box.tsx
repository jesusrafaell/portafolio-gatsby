import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as three from 'three';

interface Props {
	position: number[];
}

function Box(props: Props) {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef<three.Mesh>(null);
	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (ref.current!.rotation!.y += delta));
	useFrame((state, delta) => (ref.current!.rotation!.x += delta));
	// Return the view, these are regular Threejs elements expressed in JSX
	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1}
			onClick={() => click(!clicked)}
			onPointerOver={() => hover(true)}
			onPointerOut={() => hover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}

export default Box;
