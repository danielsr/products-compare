import { AxiosResponse } from "axios";
import axios from "./axiosConfig";

export default {
  getProducts: (): Promise<AxiosResponse<Product.Product[]>> =>
    axios.get("/products/all"),
};
