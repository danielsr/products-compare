import { featuresNotToCompare } from "config/features";

const getProductFeatures = (products: Product.Product[]): string[] =>
  Object.keys(products[0]);

const isFeatureToCompare = (feature: string): boolean =>
  !featuresNotToCompare.includes(feature);

const isFeatureHighlighted = (
  feature: string,
  selectedProducts: Product.Product[],
): boolean => new Set(selectedProducts.map((prod) => prod[feature])).size > 1;

const mapFeature = (
  feature: string,
  products: Product.Product[],
): Product.Feature => ({
  name: feature,
  highlight: isFeatureHighlighted(feature, products),
});

export const getFeaturesFromProducts = (
  products: Product.Product[],
  selectedProducts: Product.Product[],
): Product.Feature[] =>
  getProductFeatures(products)
    .filter(isFeatureToCompare)
    .sort()
    .map((feature) => mapFeature(feature, selectedProducts));
