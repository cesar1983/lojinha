import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles.js";
import Button from "../Button";

const Nav = () => {
  return (
    <S.Nav>
      <Link to="/">
        <Button name="showroom" label="Show Room" />
      </Link>

      <Link to="/orders">
        <Button name="order" label="Pedido" />
      </Link>
    </S.Nav>
  );
};

export default Nav;
