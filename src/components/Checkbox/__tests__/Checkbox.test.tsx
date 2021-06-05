import React from "react";
import { fireEvent, render, screen } from "unit-test/testUtils";
import Checkbox from "../index";

describe("Checkbox", () => {
  it("renders with initial value", () => {
    const onChange = jest.fn();
    render(
      <Checkbox name="test" label="Test" checked={true} onChange={onChange} />,
    );
    const checkbox = screen.getByLabelText("Test");
    expect(checkbox).toBeChecked();
  });

  it("calls onChange when clicking the checkbox", () => {
    const onChange = jest.fn();
    render(
      <Checkbox name="test" label="Test" checked={true} onChange={onChange} />,
    );
    const checkbox = screen.getByLabelText("Test");
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("calls onChange when clicking the label", () => {
    const onChange = jest.fn();
    render(
      <Checkbox name="test" label="Test" checked={false} onChange={onChange} />,
    );
    const label = screen.getByText("Test");
    fireEvent.click(label);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
