import { AxiosResponse } from "axios";
import axios from "./axiosConfig";

export default {
  getProducts: (): Promise<AxiosResponse<{ products: Product.Product[] }>> =>
    axios.get("/products/all"),
};
