import React from "react";
import { Container, Content } from "./styled";
import ProductList from "../../components/ProductList";
import SwipeableEdgeDrawer from "../../components/Drawer";
import CustomizedSnackbars from "../../components/Alert";
import Header from "../../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <CustomizedSnackbars />
        <Content>
          <ProductList />
          <SwipeableEdgeDrawer />
        </Content>
      </Container>
    </>
  );
};

export default HomePage;
