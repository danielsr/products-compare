import { AxiosResponse } from "axios";
import axios from "./axiosConfig";
import { Product } from "../types";

export default {
  getProducts: (): Promise<AxiosResponse<Product[]>> =>
    axios.get("/products/all"),
};
