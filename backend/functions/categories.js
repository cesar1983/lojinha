const fs = require("fs");
const fileContents = fs.readFileSync("./data/products.json", "utf8");
const products = JSON.parse(fileContents);

module.exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(products),
  };

  return response;
};
