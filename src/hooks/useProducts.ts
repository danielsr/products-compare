import { useCallback, useMemo, useState } from "react";
import productsData from "../../data/products.json";
import featuresData from "../../data/features.json";

export function useProducts(): {
  products: Product.Product[];
  selectedProducts: Product.Product[];
  features: Product.Feature[];
  fetchProducts: () => void;
  selectedProductSkus: string[];
  setSelectedProductSkus: (selectedProductSkus: string[]) => void;
} {
  const [products, setProducts] = useState<Product.Product[]>([]);
  const [selectedProductSkus, setSelectedProductSkus] = useState<string[]>([]);

  const features = useMemo(() => {
    return featuresData.sort((a, b) => (a.name > b.name ? 1 : -1));
  }, [featuresData]);

  const fetchProducts = useCallback(() => {
    setProducts(productsData.products);
  }, [productsData, setProducts]);

  const selectedProducts = products?.filter(({ sku }) =>
    selectedProductSkus.includes(sku),
  );

  return {
    products,
    features,
    fetchProducts,
    selectedProductSkus,
    setSelectedProductSkus,
    selectedProducts,
  };
}
