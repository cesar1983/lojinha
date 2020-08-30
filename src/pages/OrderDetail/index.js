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
        <dl>
          <dt>Date</dt>
          <dd>{order.date}</dd>
          <dt>Name</dt>
          <dd>{order.name}</dd>
          <dt>E-mail</dt>
          <dd>{order.email}</dd>
          <dt>Phone</dt>
          <dd>{order.phone}</dd>
          <dt>Total</dt>
          <dd>{order.total}</dd>
        </dl>

        <S.TableWrapper>
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
              {/* {order?.items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.orderQuantity}</td>
                    <td>{item.price}</td>
                    <td>
                      {parseFloat(order.orderQuantity * order.price).toFixed(2)}
                    </td>
                  </tr>
                );
              })} */}
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
