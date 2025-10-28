// src/api/axios.js
import axios from "axios";

const api = axios.create({
  // baseURL: "http://103.191.208.95/api/v1",
  baseURL:"https://72t09sg9-5000.inc1.devtunnels.ms/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
