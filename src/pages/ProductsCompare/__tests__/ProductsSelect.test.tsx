import React from "react";
import { fireEvent, render, screen } from "unit-test/testUtils";
import ProductsSelect from "../ProductsSelect";
import { products } from "unit-test/mocks/products.json";

describe("ProductsSelect", () => {
  it("renders initial value and handle selection", () => {
    const onChange = jest.fn();
    render(
      <ProductsSelect
        products={products}
        value={[products[0].sku, products[1].sku]}
        onChange={onChange}
      />,
    );

    const checkbox0 = screen.getByLabelText(products[0].name);
    expect(checkbox0).toBeChecked();

    const checkbox1 = screen.getByLabelText(products[1].name);
    expect(checkbox1).toBeChecked();

    fireEvent.click(checkbox0);

    expect(onChange).toHaveBeenCalledWith([products[1].sku]);
  });
});
