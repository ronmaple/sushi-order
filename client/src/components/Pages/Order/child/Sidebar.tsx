import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import menuData from '../../../../settings/menu.json';
import { setCurrentPage } from '../../../../redux/actions/cart.actions';
import { connect } from 'react-redux';

type StyledLinkType = {
	isSelected?: boolean;
};

const matchDispatchToProps = (dispatch: any) => ({
	setCurrentPage: (page: any) => {
		dispatch(setCurrentPage(page));
	},
});

const matchStateToProps = (state: any) => ({
	selected: state.cart.currentSelectedKey,
});

const Sidebar: React.FC = (props: any) => {
	return (
		<Container>
			<SidebarHeader>
				<h3>Menu</h3>
			</SidebarHeader>
			{menuData.map((item) => {
				return (
					<Link to={`/order/${item.key}`} onClick={() => props.setCurrentPage(item.key)}>
						<StyledLink isSelected={props.selected === item.key ? true : false} key={item.key}>
							{item.type}
						</StyledLink>
					</Link>
				);
			})}
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 1rem 0.5rem;
	box-sizing: border-box;
	border-radius: 0.2rem;
	box-shadow: ${(props) => props.theme.shadow};
`;

const SidebarHeader = styled.div`
	height: 3rem;
	width: 100%;
	color: ${(props) => props.theme.colors.darker_steel_blue};
	border-bottom: solid 0.2rem ${(props) => props.theme.colors.steel_blue};

	h3 {
		font-size: ${(props) => props.theme.fonts.size.medium};
		font-weight: 700;
	}
`;
const StyledLink = styled.li<StyledLinkType>`
	height: 3rem;
	width: 100%;
	border-bottom: dashed 0.05rem ${(props) => props.theme.colors.steel_blue};
	display: flex;
	align-items: center;
	font-weight: 500;
	font-size: ${(props) => props.theme.fonts.size.small};
	cursor: pointer;
	background: ${(props) => (props.isSelected ? '#f2f2f2' : 'white')};

	&:hover {
		transition: all 0.4s ease;
		-webkit-transition: all 0.4s ease;
		background: #f2f2f2;
	}

	&:active {
		background: ${(props) => props.theme.colors.grey_light};
	}
`;

export default connect(matchStateToProps, matchDispatchToProps)(Sidebar);
