import { render } from "unit-test/testUtils";
import React from "react";
import ProductColumn from "../ProductColumn";
import { products } from "unit-test/mocks/products.json";
import features from "unit-test/mocks/features.json";

describe("ProductColumn", () => {
  it("renders", () => {
    const wrapper = render(
      <ProductColumn
        product={products[0]}
        features={features}
        onDelete={() => null}
      />,
    );

    console.log(wrapper.debug());
  });
});
