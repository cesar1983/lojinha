const api = require("./services/axios-firebase");

exports.handler = function (event, context, callback) {
  console.log("saving order");

  // const orderData = event.body;

  const orderData =
    '{"name":"Cesar","phone":"131212121","email":"cesar.fa@gmail.com","items":[{"id":"1","title":"Pilhas AAA","description":"Pilhas AAA","price":50.5},{"id":"2","title":"Pilhas A","description":"Pilhas A","price":150.5}]}';
  const orderJson = JSON.parse(orderData);

  console.log(orderJson);
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
