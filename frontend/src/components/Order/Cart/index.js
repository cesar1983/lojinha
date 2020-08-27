import React, { useContext, useMemo } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusSquare } from "react-icons/ai";

import * as S from "./styles.js";
import { CartContext } from "../../../contexts/CartContext.js";
import Checkout from "../Checkout/index.js";

const Cart = () => {
  const { orderItems, addItem, removeItem } = useContext(CartContext);

  let memoizedTotal = 0.0;
  memoizedTotal = useMemo(
    () =>
      orderItems.reduce(
        (subtotal, item) => subtotal + item.orderQuantity * item.price,
        0
      ),
    [orderItems]
  );

  return (
    <S.CartWrapper>
      <table>
        <thead>
          <tr>
            <th align="left">Produto</th>
            <th>Qtd.</th>
            <th>Preço</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orderItems?.map((item, index) => {
            return (
              <tr key={index}>
                <td align="left">{item.title}</td>
                <td>{item.orderQuantity}</td>
                <td>{item.price}</td>
                <td>
                  {parseFloat(item.orderQuantity * item.price).toFixed(2)}
                </td>
                <td>
                  <AiOutlineMinusSquare
                    size={22}
                    color="#c40303"
                    style={{ cursor: "pointer", marginRight: "5px" }}
                    onClick={() => removeItem(item)}
                  />
                  <AiOutlinePlusCircle
                    size={22}
                    color="#31aa45"
                    style={{ cursor: "pointer" }}
                    onClick={() => addItem(item)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <S.CartTotal>Total: R${parseFloat(memoizedTotal).toFixed(2)}</S.CartTotal>

      {orderItems && orderItems.length > 0 && <Checkout />}
    </S.CartWrapper>
  );
};

export default Cart;
