import React, { useState, useEffect } from "react";
import Layout from "../../components/UI/Layout";
import Spinner from "../../components/UI/Spinner";
import api from "../../services/api";

import { IoIosArrowRoundBack } from "react-icons/io";

import * as S from "./styles.js";
import { Link } from "react-router-dom";

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
      <S.OrderDetailWrapper>
        <S.OrderDetailCard>
          <S.DefinitionList>
            <S.DefinitionListLabel>Data</S.DefinitionListLabel>
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
            <S.DefinitionListLabel>Telefone</S.DefinitionListLabel>
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
        </S.OrderDetailCard>
        <p style={{ marginTop: "2rem", textAlign: "left" }}>
          <Link to="/orders">
            <IoIosArrowRoundBack />
            Voltar
          </Link>
        </p>
      </S.OrderDetailWrapper>
    );
  }

  return (
    <Layout>
      <S.OrderDetailWrapper>{orderHtml}</S.OrderDetailWrapper>
    </Layout>
  );
};

export default OrderDetail;
