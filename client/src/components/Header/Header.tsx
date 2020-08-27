//@ts-nocheck --> props.location.pathname on styled components
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import headerItems from '../../settings/header.json';
import logo from '../../assets/logo.png';

const Header: React.FC = (props) => {
	console.log('header props', props);
	return (
		<Container>
			<LogoContainer location={props.location}>
				<Link to="/">
					<LogoImg src={logo} />
				</Link>
			</LogoContainer>
			<FlexHeader>
				{headerItems.map(({ label, path, key }) => {
					console.log('header item key', key);
					if (key === 'cart') {
						return (
							<Cart location={props.location}>
								<Link to={path}>{label}</Link>
								<CartTotalItem>
									<span>1</span>
								</CartTotalItem>
							</Cart>
						);
					}
					return (
						<StyledLinks>
							<Link to={path}>{label}</Link>
						</StyledLinks>
					);
				})}
			</FlexHeader>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
	width: 100%;
	margin: auto;
	display: grid;
	grid-template-rows: 10em 3em;
	/* justify-content: space-around; */

	&:nth-child(1) {
		align-self: center;
	}

	> div {
	}
	/* align-content: center; */
`;

const LogoContainer = styled.div`
	height: 8em;
	width: auto;
	text-align: center;
	margin: auto;
	/* ts error - ignored for now*/
	/* display: ${(props) => (props.location.pathname !== '/' ? 'none' : 'block')}; */
	
`;

const LogoImg = styled.img`
	height: 8em;
	width: auto;
	text-align: center;
`;

const FlexHeader = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-around;
	align-content: center;
	flex-wrap: wrap;
	margin: auto;
	padding: 0.5em 1.5em;
	background: ${(props) => props.theme.colors.navy_blue};
	border-radius: 0.25em;

	&:hover {
		opacity: 0.98;
		/* box-shadow: ${(props) => props.theme.shadowHover}; */
	}
`;

const StyledLinks = styled.li`
	list-style-type: none;
	font-size: ${(props) => props.theme.fonts.size.small};
	display: inline-block;
	color: white;

	&:after {
		display: block;
		content: '';
		border-bottom: solid 0.1em white;
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	}

	&:hover:after {
		transform: scaleX(1);
	}
	/* &:hover {
		color: ${(props) => props.theme.colors.navy_blue};
	} */
`;

const Cart = styled.li`
	background: ${(props) => props.theme.colors.steel_blue};
	color: white;
	text-shadow: 0.05em 0.05em grey;

	border: 2em;
	list-style-type: none;
	font-size: ${(props) => props.theme.fonts.size.small};
	width: 4em;
	text-align: center;
	border-radius: 0.75rem;
	/* display: ${(props) => (props.location.pathname === '/order' ? 'flex' : 'none')}; */
	display: flex;
	padding: 0 0.25rem;
	justify-content: space-evenly;
	align-content: center;

	&:hover {
		transform: scale(1.05);
		transition: transform 250ms ease-in-out;
	}
`;

const CartTotalItem = styled.div`
	width: 0.9em;
	height: 0.9em;
	background: white;
	border-radius: 50%;
	line-height: 0.75em;
	background: ${(props) => props.theme.colors.light_steel_blue};
	align-self: center;

	span {
		font-size: ${(props) => props.theme.fonts.size.xs};
	}
`;
export default withRouter(Header);
