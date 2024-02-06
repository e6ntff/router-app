import React, { useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import paths from '../utils/paths';

const StyledHeader = styled.header`
	position: fixed;
	inset: 0;
	inline-size: 100%;
	block-size: min-content;
	background: #bbb;
	border-end-start-radius: 1rem;
	border-end-end-radius: 1rem;
	padding: 1.5rem;
`;

const StyledList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

const StyledButton = styled.button`
	text-transform: uppercase;
	font-family: sans-serif;
	border: none;
	font-size: 2rem;
	font-weight: 700;
	background: #0000;
	transition: 0.15s;
	cursor: pointer;

	&:hover {
		color: #555;
	}

	&:disabled {
		color: #888;
	}
`;

const Header: React.FC = () => {
	const location = useLocation();
	const isActivePath = useCallback(
		(path: string) => path === location.pathname,
		[]
	);

	return (
		<StyledHeader>
			<nav>
				<StyledList>
					<li>
						<NavLink to={paths.password}>
							<StyledButton disabled={isActivePath(paths.password)}>
								Password Generator
							</StyledButton>
						</NavLink>
					</li>
					<li>
						<NavLink to={paths.colors}>
							<StyledButton disabled={isActivePath(paths.colors)}>
								Color Picker
							</StyledButton>
						</NavLink>
					</li>
					<li>
						<NavLink to={paths.cards}>
							<StyledButton disabled={isActivePath(paths.cards)}>
								Card Checker
							</StyledButton>
						</NavLink>
					</li>
				</StyledList>
			</nav>
		</StyledHeader>
	);
};

export default Header;
