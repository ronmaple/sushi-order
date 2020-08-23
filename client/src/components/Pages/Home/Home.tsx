import React from "react";
import styled from "styled-components";

import background from "../../../assets/sashimi-donburi.jpg";

const Home: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={background} />
      </ImageContainer>
      <Main>
        <TextContainer>
          <h2>Welcome hello how are you</h2>
          <span>This is some delicious gourmet stuff you better like it</span>
        </TextContainer>
        <ButtonContainer></ButtonContainer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
`;

const ImageContainer = styled.section`
  padding: 5em;
  grid-area: 1 / 1 / 2 / 2;
  height: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  overflow-x: hidden;
`;

const Main = styled.section`
  grid-area: 1 / 2 / 2 / -1;
  height: 100%;
  padding: 5em;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  border: dashed 1px green;
`;

const TextContainer = styled.div`
  height: 100%;
  border: dashed 1px blue;
  grid-area: 1 / 1 / 2 / -1;
  text-align: center;
  margin: auto;

  h2,
  span {
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
  border: dashed 1px green;
`;

export default Home;
