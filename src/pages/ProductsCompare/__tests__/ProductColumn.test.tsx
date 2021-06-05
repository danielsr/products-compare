import { render } from "../../../../configs/jest/testingLibraryUtils";
import React from "react";
import ProductColumn from "../ProductColumn";
import { products } from "../../../../data/products.json";
import features from "../../../../data/features.json";

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
