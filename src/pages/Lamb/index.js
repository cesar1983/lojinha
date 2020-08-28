import React, { useState, useEffect } from "react";
import Layout from "../../components/UI/Layout";
import Axios from "axios";

const Lamb = () => {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    Axios.get("/.netlify/functions/orders-list")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error while trying to fetch orders.");
      });
  }, []);

  return (
    <Layout>
      {orders?.map((order) => {
        return (
          <div key={order.id}>
            <ul>
              <li>{order.date}</li>
              <li>{order.name}</li>
              <li>{order.email}</li>
              <li>{order.phone}</li>
              <li>{parseFloat(order.total).toFixed(2)}</li>
            </ul>
          </div>
        );
      })}
    </Layout>
  );
};

export default Lamb;
