const api = require("./services/axios-firebase");

exports.handler = function (event, context, callback) {
  console.log("getting products list");
  api
    .get("/products.json")
    .then((response) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data),
      });
    })
    .catch((error) => {
      console.log("Error fetching products", error);
      callback(new Error("Error fetching products. Contact system admin."));
    });
};
