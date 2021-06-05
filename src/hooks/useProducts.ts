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
  unselectProduct: (product: Product.Product) => void;
} {
  const [products, setProducts] = useState<Product.Product[]>([]);
  const [selectedProductSkus, setSelectedProductSkus] = useState<string[]>([]);

  const features = useMemo(() => {
    return featuresData.sort((a, b) => (a.name > b.name ? 1 : -1));
  }, [featuresData]);

  const selectedProducts = useMemo(() => {
    return products?.filter(({ sku }) => selectedProductSkus.includes(sku));
  }, [products, selectedProductSkus]);

  const fetchProducts = useCallback(() => {
    setProducts(productsData.products);
  }, [productsData, setProducts]);

  const unselectProduct = useCallback(
    (product: Product.Product) => {
      setSelectedProductSkus((skus) =>
        skus.filter((sku) => sku !== product.sku),
      );
    },
    [setSelectedProductSkus],
  );

  return {
    products,
    features,
    fetchProducts,
    selectedProductSkus,
    setSelectedProductSkus,
    selectedProducts,
    unselectProduct,
  };
}
