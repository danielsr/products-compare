import { render } from "@testing-library/react";
import React from "react";
import Checkbox from "./index";

describe("Checkbox", () => {
  it("renders", () => {
    const wrapper = render(
      <Checkbox
        name="test"
        label="Test"
        checked={true}
        onChange={() => null}
      />,
    );

    console.log(wrapper.debug());
  });
});
