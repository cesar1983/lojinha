import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusSquare } from "react-icons/ai";

import * as S from "./styles.js";

const someArray = [1, 2, 3];
const Cart = (props) => (
  <S.CartWrapper>
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Qtd.</th>
          <th>Preço</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Object.values(someArray).map((value, index) => {
          return (
            <tr key={index}>
              <td>{value}</td>
              <td>{value}</td>
              <td>{value}</td>
              <td>{value}</td>
              <td>
                <AiOutlineMinusSquare
                  size={22}
                  color="#c40303"
                  style={{ cursor: "pointer", marginRight: "5px" }}
                  onClick={() => alert("Subtrair")}
                />
                <AiOutlinePlusCircle
                  size={22}
                  color="#31aa45"
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("Adicionar")}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <S.CartTotal>Total: R$0.0</S.CartTotal>
  </S.CartWrapper>
);

export default Cart;
