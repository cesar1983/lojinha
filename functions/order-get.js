const api = require("./services/axios-firebase");

exports.handler = function (event, context, callback) {
  console.log("getting order");

  // const key = "-MFuYc1it8Xy8bfrsz0P";
  const key = event.queryStringParameters.id;

  api
    .get('/orders.json?orderBy="$key"&equalTo="' + key + '"')
    .then((response) => {
      console.log(response.data);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data[key]),
      });
    })
    .catch((error) => {
      console.log("Error fetching orders", error);
      callback(new Error("Error fetching orders. Contact system admin."));
    });
};
