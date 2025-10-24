// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://103.191.208.95/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
