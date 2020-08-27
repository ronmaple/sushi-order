//@ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Footer: React.FC = (props) => {
	console.log('footer props', props);

	return <Container location={props.location}>Footer</Container>;
};

const Container = styled.div`
	grid-area: 3 / 1 / 4 / 2;
	background: ${(props) => props.theme.colors.navy_blue};
	height: 100%;
	width: 100%;
	display: ${(props) => (props.location.pathname !== '/' ? 'none' : 'block')};
`;

export default withRouter(Footer);
