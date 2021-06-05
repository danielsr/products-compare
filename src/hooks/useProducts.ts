import { useCallback, useMemo, useState } from "react";
import productsService from "services/products";
import { getFeaturesFromProducts } from "./helpers";

export function useProducts(): {
  products: Product.Product[];
  selectedProducts: Product.Product[];
  features: Product.Feature[];
  selectedProductSkus: string[];
  isLoading: boolean;
  fetchProducts: () => void;
  setSelectedProductSkus: (selectedProductSkus: string[]) => void;
  unselectProduct: (product: Product.Product) => void;
} {
  const [products, setProducts] = useState<Product.Product[]>([]);
  const [selectedProductSkus, setSelectedProductSkus] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const selectedProducts = useMemo(() => {
    return products?.filter(({ sku }) => selectedProductSkus.includes(sku));
  }, [products, selectedProductSkus]);

  const features = useMemo(() => {
    return products.length === 0
      ? []
      : getFeaturesFromProducts(products, selectedProducts);
  }, [products, selectedProducts]);

  const fetchProducts = useCallback(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await productsService.getProducts();
        setProducts(data.products);
        setSelectedProductSkus(data.products.map(({ sku }) => sku));
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [setProducts, setSelectedProductSkus, setIsLoading]);

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
    isLoading,
  };
}
