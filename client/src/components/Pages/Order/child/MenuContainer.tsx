// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import dataMenu from '../../../../settings/menu.json';
import MenuItemCard from './MenuItemCard';
import { connect } from 'react-redux';
import { openModal, setCurrentSelected } from '../../../../redux/actions/cart.actions';
import { stringify } from 'querystring';

const MenuContainer = ({ match, openModal, setCurrentSelected }) => {
	console.log('match', match);

	let dataKey;

	if (!match) {
		dataKey = 'roll';
	} else {
		dataKey = match.params.key;
	}

	let menuSelections = dataMenu.find(({ key }) => key === dataKey);

	let { type, menu, key, image } = menuSelections;

	return (
		<Container>
			<MenuHeader>
				<MenuTitleSpace>
					<h3>{type}</h3>
				</MenuTitleSpace>
			</MenuHeader>
			<MenuItemsContainer>
				{menu.map((item) => {
					console.log('item', item);
					return (
						<MenuItemCard
							handleClick={() => {
								console.log('openModal');
								setCurrentSelected({ name: item.name, price: item.price });
								openModal(true);
							}}
							name={item.name}
							price={item.price}
						/>
					);
				})}
			</MenuItemsContainer>
		</Container>
	);
};

const Container = styled.div`
	box-sizing: border-box;
	display: grid;
	height: 100%;
	width: 100%;
	grid-template-columns: 60% 40%;
	grid-template-rows: 4rem auto;
`;

const BackgroundImageContainer = styled.div`
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	background: url(${(props) => props.image});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-color: rgba(0, 0, 0, 2);
`;

const MenuHeader = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	height: 4rem;
	width: 100%;
	display: grid;
	/* grid-template-columns: 50% 50%; */
	box-sizing: border-box;
	padding: 1rem;
	background: white;
`;

const MenuTitleSpace = styled.div`
	/* grid-area: 1 / 1 / 2 / 2; */
	height: 100%;
	width: 100%;
	padding: 0.1rem 0.75rem;
	border-bottom: solid 0.15rem ${(props) => props.theme.colors.steel_blue};

	h3 {
		font-size: ${(props) => props.theme.fonts.size.medium};
		font-weight: 700;
		color: ${(props) => props.theme.colors.darker_steel_blue};
	}
`;

const Background = styled.div`
	grid-area: 1 / 1 / 2 / 3;
	background: url(${(props) => props.image});
	background-repeat: no-repeat;
	/* background-attachment: fixed; */
	background-position: center;
	overflow: hidden;
`;

const MenuItemsContainer = styled.div`
	grid-area: 2 / 1 / 3 / 3;
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 1rem;
	/* margin: auto; */
	/* justify-content: center; */
	/* align-content: center; */
	grid-gap: 0.3rem;
`;

const mapDispatchToProps = (dispatch: any) => ({
	openModal: (toOpenModal: boolean) => {
		console.log('openModal dispatch');
		dispatch(openModal(toOpenModal));
	},
	setCurrentSelected: (selectedItem: { name: string; price: number }) => {
		console.log('setcurrentSelected dispatch');
		dispatch(setCurrentSelected(selectedItem));
	},
	setCurrentAndOpenModal: (selectedItem, isModalOpen) => {
		dispatch(setCurrentSelected(selectedItem));
		dispatch(openModal(isModalOpen));
	},
});
export default connect(null, mapDispatchToProps)(MenuContainer);
