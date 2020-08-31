import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/UI/Layout";
import Spinner from "../../components/UI/Spinner";
import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";
import api from "../../services/api";
import * as S from "./styles.js";

const Orders = () => {
  const [orders, setOrders] = useState();
  let history = useHistory();

  useEffect(() => {
    api
      .get("/.netlify/functions/orders-list")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log("Error while trying to fetch orders.");
      });
  }, []);

  const orderClickHandler = (id) => {
    history.replace("/order/" + id);
  };

  let htmlOrders = <Spinner />;
  if (orders) {
    htmlOrders = (
      <>
        <h1>Pedidos</h1>
        <S.OrdersTableWrapper>
          <S.OrdersTable>
            <thead>
              <tr>
                <th>Data</th>
                <th align="left">Nome</th>
                <th align="left">E-mail</th>
                <th>Phone</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => {
                return (
                  <tr
                    key={order.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => orderClickHandler(order.id)}
                  >
                    <td>
                      {format(parseISO(order.date), "dd/MM/yyyy - HH:mm:ss", {
                        locale: pt,
                      })}
                    </td>
                    <td align="left">{order.name}</td>
                    <td align="left">{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{parseFloat(order.total).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </S.OrdersTable>
        </S.OrdersTableWrapper>
      </>
    );
  }

  return (
    <Layout>
      <S.OrdersWrapper>{htmlOrders}</S.OrdersWrapper>
    </Layout>
  );
};

export default Orders;
