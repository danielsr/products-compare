import React from "react";
import { fireEvent, render, screen } from "unit-test/testUtils";
import ProductColumn from "../ProductColumn";
import { products } from "unit-test/mocks/products.json";
import { getFeaturesFromProducts } from "hooks/helpers";

describe("ProductColumn", () => {
  const features = getFeaturesFromProducts(products);

  it("renders product info", () => {
    const onDelete = jest.fn();
    render(
      <ProductColumn
        product={products[0]}
        features={features}
        onDelete={onDelete}
      />,
    );
    expect(screen.getByText(products[0].name)).toBeInTheDocument();
    expect(screen.getByText(products[0].salePrice)).toBeInTheDocument();
    expect(screen.getByText(products[0].Toepassing)).toBeInTheDocument();
    expect(screen.getByText(products[0].Materiaal)).toBeInTheDocument();
  });

  it("calls onDelete when clicking delete icon", () => {
    const onDelete = jest.fn();

    render(
      <ProductColumn
        product={products[0]}
        features={features}
        onDelete={onDelete}
      />,
    );

    fireEvent.click(screen.getByTestId("DeleteIcon"));

    expect(onDelete).toHaveBeenCalledWith(products[0]);
  });
});
