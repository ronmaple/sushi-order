import React from 'react';
import styled from 'styled-components';

const MenuItemCard: React.FC = ({ handleClick, name, price }: any) => {
	return (
		<Container onClick={handleClick}>
			<InfoBox>
				<MenuItemNameSpace>
					<span>{name}</span>
				</MenuItemNameSpace>
				<MenuItemPriceSpace>
					<span>{price}</span>
				</MenuItemPriceSpace>
			</InfoBox>
		</Container>
	);
};

const Container = styled.div`
	height: 4rem;
	width: 75%;
	/* border: solid 1px red; */
	border-radius: 0.2rem;
	padding: 0.1rem 0.2rem;
	box-shadow: ${(props) => props.theme.shadow};
	display: flex;

	&:hover {
		cursor: pointer;
		box-shadow: ${(props) => props.theme.shadowHover};
		transform: scale(1.02);
		transition: ${(props) => props.theme.transition.transform};
	}

	&:active {
		transform: scale(0.9);
		transition: ${(props) => props.theme.transition.transform};
	}
`;

const InfoBox = styled.div``;

const MenuItemNameSpace = styled.div`
	padding: 0.5em 0.3em;

	span {
		font-size: ${(props) => props.theme.fonts.size.small};
		font-weight: 700;
	}
`;

const MenuItemPriceSpace = styled.div`
	padding: 0.1em 0.5em;

	span {
		font-size: ${(props) => props.theme.fonts.size.xs};
		font-weight: 400;
	}
`;
export default MenuItemCard;
