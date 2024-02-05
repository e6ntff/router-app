import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Screen = styled.input<{ valid?: boolean }>`
	background: ${({ valid }) =>
		valid === undefined ? '#0000' : valid === true ? '#0f07' : '#f007'};
	inline-size: 21rem;
	padding: 0.5rem;
	font-size: 2rem;
	font-family: sans-serif;
	font-weight: 500;
	border: 0.125rem solid #000;
	border-radius: 0.5rem;
	cursor: text;
	color: #000;
	text-align: center;
`;

export const Button = styled.button`
	background: #0000;
	padding: 0.5rem;
	font-size: 2rem;
	font-family: sans-serif;
	font-weight: 500;
	border: 0.125rem solid #000;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: 0.15s;
	text-transform: uppercase;

	&:hover {
		background: #bbb;
	}
`;

const Password: React.FC = () => {
	const [password, setPassword] = useState<string>('');

	useEffect(() => {
		getRandomPassword();
	}, []);

	const getRandomPassword = (length: number = 16) => {
		const newPassword = new Array(length)
			.fill(undefined)
			.map(() => String.fromCharCode(Math.random() * 86 + 40))
			.join('');

		setPassword(newPassword);
	};

	return (
		<>
			<Screen
				type='text'
				value={password}
				disabled
			/>
			<Button onClick={() => getRandomPassword()}>Generate</Button>
		</>
	);
};

export default Password;
