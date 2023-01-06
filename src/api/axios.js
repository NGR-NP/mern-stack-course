import axios from "axios";

export default axios.create({
  baseURL:
    "https://vrit-tech-mernstack-project-by-roll-1.up.railway.app/api",
  headers: { "Content-Type": "application/json" },
});
