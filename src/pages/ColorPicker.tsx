import React, { useState } from 'react';
import { Button } from './Password';
import styled from 'styled-components';

const Screen = styled.div<{ color: string }>`
	block-size: 15rem;
	inline-size: 15rem;
	border: 0.125rem solid #000;
	border-radius: 0.5rem;
	transition: 0.15s;
	background: ${({ color }) => color};
`;

const Input = styled.input`
	background: #0000;
	inline-size: 20rem;
	text-align: center;
	padding: 0.5rem;
	font-size: 2rem;
	font-family: sans-serif;
	font-weight: 500;
	border: 0.125rem solid #000;
	border-radius: 0.5rem;
	cursor: text;
`;

const ColorPicker: React.FC = () => {
	const getRandomColor = () => {
		const [r, g, b] = [
			Math.floor(Math.random() * 256),
			Math.floor(Math.random() * 256),
			Math.floor(Math.random() * 256),
		];

		return `rgb(${r}, ${g}, ${b})`;
	};

	const [color, setColor] = useState<string>(getRandomColor());

	const changeColor = () => {
		const newColor = getRandomColor();
		setColor(newColor);
	};

	return (
		<>
			<Screen color={color}></Screen>
			<Input
				type='text'
				value={color}
			/>
			<Button onClick={changeColor}>generate</Button>
		</>
	);
};

export default ColorPicker;
