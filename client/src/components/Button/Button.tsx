import React from 'react';
import styled from 'styled-components';

const Button: React.FC = ({ children }) => {
	return <Container>{children}</Container>;
};

const Container = styled.button`
	height: 3rem;
	width: 10rem;
	background: ${(props) => props.theme.colors.black};
	color: white;
	font-size: 1.5rem;
	transition: transform 250ms ease-in-out;
	cursor: pointer;

	&:after {
		content: '';
		transform: scaleX(0);
		transition: ${(props) => props.theme.transition.transform};
	}

	&:hover {
		opacity: 0.98;
		float: left;
		transform: scaleX(1.1);
	}

	&:hover:after {
		content: ' >>';
		float: right;
		transform: scaleX(1);
	}

	&:active {
		transform: scale(0.9);
		transition: ${(props) => props.theme.transition.transform};
	}
`;

export default Button;
