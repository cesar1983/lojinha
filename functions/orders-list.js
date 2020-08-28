const api = require("./services/axios-firebase");

exports.handler = function (event, context, callback) {
  console.log("getting orders");
  api
    .get("https://ziro-17a9f.firebaseio.com/orders.json")
    .then((response) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data),
      });
    })
    .catch((error) => {
      console.log("Error fetching orders", error);
      callback(new Error("Error fetching orders. Contact system admin."));
    });
};
