import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles.js";
import HeaderButton from "../HeaderButton";

const Nav = () => {
  return (
    <S.Nav>
      <Link to="/">
        <HeaderButton name="showroom" label="Novo Pedido" />
      </Link>

      <Link to="/orders">
        <HeaderButton name="order" label="Pedidos" />
      </Link>

      <Link to="/lamb">
        <HeaderButton name="lamb" label="Lamb" />
      </Link>
    </S.Nav>
  );
};

export default Nav;
