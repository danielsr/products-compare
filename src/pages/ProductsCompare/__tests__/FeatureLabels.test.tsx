import React from "react";
import { render, screen } from "unit-test/testUtils";
import FeatureLabels from "../FeatureLabels";
import features from "unit-test/mocks/features.json";

describe("FeatureLabels", () => {
  it("renders feature labels", () => {
    render(<FeatureLabels features={features} />);
    expect(screen.getByText("Toepassing")).toBeInTheDocument();
    expect(screen.getByText("Snoerdikte")).toBeInTheDocument();
  });
});
