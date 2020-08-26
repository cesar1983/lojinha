import React from "react";
import Nav from "../Nav";
import * as S from "./styles.js";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <S.Header>
        <Nav />
      </S.Header>
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export default Layout;
