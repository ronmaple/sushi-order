import React from 'react';
import styled from 'styled-components';

import background from '../../../assets/sashimi-donburi.jpg';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
	return (
		<Container>
			<ImageContainer>
				<Image src={background} />
			</ImageContainer>
			<Main>
				<TextContainer>
					<h2>Welcome to Panorama Sushi</h2>
					<span>Order for take out today!</span>
					<Link to="/order">
						<Button>Start Order</Button>
					</Link>
				</TextContainer>
				<ButtonContainer></ButtonContainer>
			</Main>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	box-sizing: content-box;
	overflow-y: hidden; /* TODO: fix overflow, height of <Main> is exceeds box */
	grid-template-columns: 50% 50%;
	background: white;
	height: 100%;
`;

const ImageContainer = styled.section`
	/* padding: 5em; */
	grid-area: 1 / 1 / 2 / 2;
	height: 100%;
`;

const Main = styled.section`
	grid-area: 1 / 2 / 2 / 3;
	height: 100%;
	max-height: 100%;
	padding: 5em;
	background: #f2f2f2;
	border: solid 1px blue;
	display: grid;
`;

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
  	overflow-x: hidden;
	/* box-shadow: ${(props) => props.theme.shadow}; */
`;

const TextContainer = styled.div`
	height: 100%;
	width: 100%;
	/* grid-area: 1 / 1 / 2 / -1; */
	text-align: center;
	margin: auto;
	box-shadow: ${(props) => props.theme.shadow};
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	h2,
	span,
	button {
		font-family: ${(props) => props.theme.fonts.family.default};
	}
	h2 {
		font-size: ${(props) => props.theme.fonts.size.medium};
	}

	span {
		font-size: ${(props) => props.theme.fonts.size.small};
	}
`;

const ButtonContainer = styled.div`
	height: 100%;
	width: 100%;
	grid-area: 2 / 1 / 3 / -1;
`;

export default Home;
