import { featuresNotToCompare } from "config/features";

const getProductFeatures = (products: Product.Product[]): string[] =>
  Object.keys(products[0]);

const filterFeaturesToCompare = (key: string): boolean =>
  !featuresNotToCompare.includes(key);

const sortAlphabetically = (a: string, b: string): number => (a > b ? 1 : -1);

const isFeatureHighlighted = (
  feature: string,
  products: Product.Product[],
): boolean => new Set(products.map((prod) => prod[feature])).size > 1;

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
    .filter(filterFeaturesToCompare)
    .sort(sortAlphabetically)
    .map((feature) => mapFeature(feature, selectedProducts));
