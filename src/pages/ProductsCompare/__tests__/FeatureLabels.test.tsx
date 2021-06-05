import React from "react";
import { render, screen } from "unit-test/testUtils";
import FeatureLabels from "../FeatureLabels";
import { getFeaturesFromProducts } from "hooks/helpers";
import { products } from "unit-test/mocks/products.json";

describe("FeatureLabels", () => {
  it("renders feature labels", () => {
    const features = getFeaturesFromProducts(products, products);
    render(<FeatureLabels features={features} />);
    expect(screen.getByText("Toepassing")).toBeInTheDocument();
    expect(screen.getByText("Snoerdikte")).toBeInTheDocument();
  });
});
