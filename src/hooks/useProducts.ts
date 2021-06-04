import { useCallback, useState } from "react";
import data from "../../data/products.json";
import { Product, ProductFeature } from "../types";

export function useProducts(): {
  products: Product[];
  features: ProductFeature[];
  fetchProducts: () => void;
} {
  const [products, setProducts] = useState<Product[]>();
  const features = [
    { name: "Toepassing", highlight: true },
    { name: "Hardheid", highlight: false },
    { name: "stepQuantity", highlight: false },
    { name: "uom", highlight: false },
    { name: "Kleur", highlight: true },
    { name: "Temperatuurgebied", highlight: false },
    { name: "Materiaal", highlight: false },
    { name: "Snoerdikte", highlight: false },
    { name: "Inwendige diameter", highlight: false },
    { name: "Maat volgens AS568", highlight: false },
  ].sort((a, b) => (a.name > b.name ? 1 : -1));

  const fetchProducts = useCallback(() => {
    setProducts(data.products);
  }, [data, setProducts]);

  return {
    products,
    features,
    fetchProducts,
  };
}
