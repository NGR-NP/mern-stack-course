import axios from "axios";
// const API_URL = "https://mern-stack-course-production.up.railway.app/api";
const API_URL = "https://mern-stack02.onrender.com/api";



export default axios.create({
  baseURL: API_URL,
});

export const axiosPrivate = axios.create({
  baseURL: API_URL,
});
