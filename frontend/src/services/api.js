import axios from "axios";

const api = axios.create({
  baseURL: "https://5f46c1e2aaaf9a0016151119.mockapi.io/api/v1",
});

export default api;
