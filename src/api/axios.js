import axios from "axios";
const API_URL = "https://vrit-tech-mern-project-by-tejkarki.up.railway.app/api";

export default axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
