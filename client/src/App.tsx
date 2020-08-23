import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import Contacts from "./components/Pages/Contacts/Contacts";
import Order from "./components/Pages/Order/Order";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import styled from "styled-components";
import Theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import "./styles/fonts.css";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Layout>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Layout>
    </Theme>
  );
}

const Layout = styled.div`
  display: grid;
  height: 100vh;
  width: 100wh;

  @media (min-width: ${(props) => props.theme.bp.phone}) {
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    grid-template-rows: 2fr 10fr 1fr;
  }

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    grid-template-rows: 2fr 10fr 1fr;
  }
`;

export default App;
