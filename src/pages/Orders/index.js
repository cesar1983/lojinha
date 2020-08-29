import React, { useState, useEffect } from "react";
import Layout from "../../components/UI/Layout";
import * as S from "./styles.js";
import api from "../../services/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

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

  return (
    <Layout>
      <S.OrdersWrapper>
        <h1>Pedidos</h1>
        <S.TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => {
                return (
                  <tr key={order.id}>
                    <td>{order.date}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{parseFloat(order.total).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </S.TableWrapper>
      </S.OrdersWrapper>
    </Layout>
  );
};

export default Orders;
