import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import headerItems from "../../settings/header.json";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImg src={logo} />
      </LogoContainer>
      <FlexHeader>
        {headerItems.map(({ label, path, key }) => {
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
    border: dashed 1px red;
  }
  /* align-content: center; */
`;

const LogoContainer = styled.div`
  height: 10em;
  width: auto;
  text-align: center;
  margin: auto;
`;

const LogoImg = styled.img`
  height: 10em;
  width: 100%;
  text-align: center;
`;

const FlexHeader = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  margin: auto;
`;
const StyledLinks = styled.li`
  list-style-type: none;
`;

export default Header;
