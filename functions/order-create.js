const api = require("./services/axios-firebase");

exports.handler = function (event, context, callback) {
  console.log("saving order");

  const orderJson = JSON.parse(event.body);
  // console.log(orderJson);

  api
    .post("/orders.json", orderJson)
    .then((response) => {
      console.log("success");
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data),
      });
    })
    .catch((error) => {
      console.log("Error saving order", error);
      callback(new Error("Error saving order. Contact system admin."));
    });
};
