import axios from "../api/axios";
import useAuth from "./useAuth";
const REFRESH_URL = "/refresh";
const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const res = await axios.get(REFRESH_URL);
    setAuth((prev) => {
      return { ...prev, accessToken: res.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};
export default useRefreshToken;
