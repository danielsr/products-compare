import axios, { AxiosInstance } from "axios";

export const baseURL =
  "http://localhost:8081/https://5f993a3050d84900163b845a.mockapi.io/eriks";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
