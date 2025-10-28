import axios from "axios";

const api = axios.create({
  baseURL: "https://email-remainder.onrender.com/"
});

export default api;
