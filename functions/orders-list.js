const api = require("./services/axios-firebase");

exports.handler = function (event, context, callback) {
  console.log("getting orders");
  api
    .get("https://ziro-17a9f.firebaseio.com/orders.json")
    .then((response) => {
      const fetchedOrders = [];
      for (let key in response.data) {
        fetchedOrders.push({
          id: key,
          ...response.data[key],
        });
      }

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(fetchedOrders),
      });
    })
    .catch((error) => {
      console.log("Error fetching orders", error);
      callback(new Error("Error fetching orders. Contact system admin."));
    });
};
