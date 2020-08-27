// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import MenuContainer from './child/MenuContainer';
import MenuItemCard from './child/MenuItemCard';
import { Route, withRouter } from 'react-router-dom';
import Sidebar from './child/Sidebar';
import OrderPopup from './child/OrderPopup';

const Order: React.FC = (props) => {
	// console.log('match', match);
	return (
		<>
			<Container>
				<Sidebar />
				{props.location.pathname === '/order' ? (
					<MenuContainer />
				) : (
					<Route path="/order/:key" component={MenuContainer} />
				)}
			</Container>
			<OrderPopup />
		</>
	);
};

const Container = styled.div`
	width: 82.5%;
	height: 100%;
	margin: auto;
	display: grid;
	grid-template-columns: 2fr 8fr;
	position: relative;
	box-shadow: ${(props) => props.theme.shadow};
	grid-gap: 0.5rem;
`;

export default withRouter(Order);
