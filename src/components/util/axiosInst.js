import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";
import { toast } from "react-toastify";

const url = process.env.REACT_APP_SERVER_URL;
let tokenData;
try {
  tokenData = JSON.parse(localStorage.getItem("token"));
} catch (error) {}

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    Authorization: "Bearer " + tokenData?.access?.token,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.data?.message &&
      error.response?.data?.message !== "Please authenticate"
    ) {
      toast.error(error.response?.data?.message, {
        position: "top-right",
        autoClose: 12000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    throw error;
  }
);

const getAccessToken = () => {
  return tokenData?.access?.token;
};

instance.interceptors.request.use((request) => {
  request.headers["Authorization"] = `Bearer ${getAccessToken()}`;
  return request;
});



loadProgressBar({}, instance);

// createAuthRefreshInterceptor(instance);

export default instance;
