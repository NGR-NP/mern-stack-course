import axios from "axios";
const API_URL = "https://mern-stack-course-production.up.railway.app/api";
// const API_URL = "https://vrit-tech-mern-project-by-tejkarki.up.railway.app/api";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

export default axios.create({
  baseURL: API_URL,
});

export const axiosPrivate = axios.create({
  baseURL: API_URL,
  headers: { token: `Bearer ${TOKEN}` },
});