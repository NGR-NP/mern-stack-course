import axios from "axios";
const API_URL =
  "https://vrit-tech-mernstack-project-by-roll-1.up.railway.app/api";

export default axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
