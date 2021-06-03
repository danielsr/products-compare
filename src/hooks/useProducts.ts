import { useCallback, useState } from "react";
import data from "../../data/products.json";
import { Product } from "../types";

export function useProducts(): {
  products: Product[];
  features: string[];
  fetchProducts: () => void;
} {
  const [products, setProducts] = useState<Product[]>();
  const features = [
    "Toepassing",
    "Hardheid",
    "stepQuantity",
    "uom",
    "Kleur",
    "Temperatuurgebied",
    "Materiaal",
    "Snoerdikte",
    "Inwendige diameter",
    "Maat volgens AS568",
  ].sort();

  const fetchProducts = useCallback(() => {
    setProducts(data.products);
  }, [data, setProducts]);

  return {
    products,
    features,
    fetchProducts,
  };
}
