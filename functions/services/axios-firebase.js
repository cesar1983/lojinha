const axios = require("axios");

module.exports = axios.create({
  baseURL: "https://ziro-17a9f.firebaseio.com/",
});
