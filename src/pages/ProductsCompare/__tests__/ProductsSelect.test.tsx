import React from "react";
import { fireEvent, render, screen } from "unit-test/testUtils";
import ProductsSelect from "../ProductsSelect";
import { products } from "unit-test/mocks/products.json";

describe("ProductsSelect", () => {
  it("renders selected value", () => {
    const onChange = jest.fn();
    render(
      <ProductsSelect
        products={products}
        value={[products[0].sku, products[1].sku]}
        onChange={onChange}
      />,
    );

    const checkbox0 = screen.getByLabelText(products[0].name);
    const checkbox1 = screen.getByLabelText(products[1].name);

    expect(checkbox0).toBeChecked();
    expect(checkbox1).toBeChecked();
  });

  it("handles selection", () => {
    const onChange = jest.fn();
    render(
      <ProductsSelect
        products={products}
        value={[products[0].sku, products[1].sku]}
        onChange={onChange}
      />,
    );

    const checkbox0 = screen.getByLabelText(products[0].name);

    fireEvent.click(checkbox0);

    expect(onChange).toHaveBeenCalledWith([products[1].sku]);
  });
});
