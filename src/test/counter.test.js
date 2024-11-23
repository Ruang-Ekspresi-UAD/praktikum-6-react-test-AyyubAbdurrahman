import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./counter";

describe("Counter Component", () => {
  test("Counter Default Value must be 0", () => {
    render(<Counter />);
    const displayValue = screen.getByTestId("display-value");
    const counterValue = screen.getByTestId("counter-value");
    expect(displayValue).toHaveTextContent("Value: 0");
    expect(counterValue).toHaveTextContent("0");
  });

  test("increment works when button clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(incrementButton);
    expect(displayValue).toHaveTextContent("Value: 1");
  });

  test("decrement works when button clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId("decrement-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(decrementButton);
    expect(displayValue).toHaveTextContent("Value: -1");
  });

  test("display has correct value", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const decrementButton = screen.getByTestId("decrement-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(displayValue).toHaveTextContent("Value: 1");
  });
});
