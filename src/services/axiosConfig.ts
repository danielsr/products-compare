import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    "http://localhost:8081/https://5f993a3050d84900163b845a.mockapi.io/eriks",
});

export default axiosInstance;
