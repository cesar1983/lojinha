import React, { useState, useEffect } from "react";
import Layout from "../../components/UI/Layout";
import Spinner from "../../components/UI/Spinner";
import api from "../../services/api";

import * as S from "./styles.js";

const OrderDetail = () => {
  const [order, setOrder] = useState();

  useEffect(() => {
    api
      .get("/.netlify/functions/order-get")
      .then((response) => {
        console.log(response.data);
        setOrder(response.data);
      })
      .catch((error) => {
        console.log("Error while trying to fetch order info.");
      });
  }, []);

  let orderHtml = <Spinner />;

  if (order) {
    orderHtml = (
      <>
        <S.TableWrapper>
          <S.DefinitionList>
            <S.DefinitionListLabel>Date</S.DefinitionListLabel>
            <S.DefinitionListDescripton>
              {order.date}
            </S.DefinitionListDescripton>
            <S.DefinitionListLabel>Name</S.DefinitionListLabel>
            <S.DefinitionListDescripton>
              {order.name}
            </S.DefinitionListDescripton>
            <S.DefinitionListLabel>E-mail</S.DefinitionListLabel>
            <S.DefinitionListDescripton>
              {order.email}
            </S.DefinitionListDescripton>
            <S.DefinitionListLabel>Phone</S.DefinitionListLabel>
            <S.DefinitionListDescripton>
              {order.phone}
            </S.DefinitionListDescripton>
            <S.DefinitionListLabel>Total</S.DefinitionListLabel>
            <S.DefinitionListDescripton>
              {parseFloat(order.total).toFixed(2)}
            </S.DefinitionListDescripton>
          </S.DefinitionList>

          <S.OrderItemsTable>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.orderItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.orderQuantity}</td>
                    <td>{item.price}</td>
                    <td>
                      {parseFloat(item.orderQuantity * item.price).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </S.OrderItemsTable>
        </S.TableWrapper>
      </>
    );
  }

  return (
    <Layout>
      <S.OrderDetailWrapper>{orderHtml}</S.OrderDetailWrapper>
    </Layout>
  );
};

export default OrderDetail;
