import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter, Greeting, AlertButton } from "./Latihan";
import "@testing-library/jest-dom";

describe("Latihan Components", () => {
  describe("Counter Component", () => {
    test("Counter Default Value must be 0", () => {
      render(<Counter />);
      const counterValue = screen.getByTestId("counter-value");
      expect(counterValue).toHaveTextContent("0");
    });

    test("increment works when button clicked", () => {
      render(<Counter />);
      const incrementButton = screen.getByTestId("increment-button");
      const counterValue = screen.getByTestId("counter-value");

      fireEvent.click(incrementButton);
      expect(counterValue).toHaveTextContent("1");
    });

    test("decrement works when button clicked", () => {
      render(<Counter />);
      const decrementButton = screen.getByTestId("decrement-button");
      const counterValue = screen.getByTestId("counter-value");

      fireEvent.click(decrementButton);
      expect(counterValue).toHaveTextContent("-1");
    });

    test("reset the count using reset button", () => {
      render(<Counter />);
      const incrementButton = screen.getByTestId("increment-button");
      const resetButton = screen.getByTestId("reset-button");
      const counterValue = screen.getByTestId("counter-value");

      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      expect(counterValue).toHaveTextContent("2");

      fireEvent.click(resetButton);
      expect(counterValue).toHaveTextContent("0");
    });
  });

  describe("Greeting Component", () => {
    test("greeting component with student name", () => {
      render(<Greeting name="Ahmad Fauzi" />);
      const greetingElement = screen.getByTestId("greeting");
      expect(greetingElement).toHaveTextContent("Hello, Ahmad Fauzi");
    });

    test("greeting component with lecturer name", () => {
      render(<Greeting name="Bapak Informatika" />);
      const greetingElement = screen.getByTestId("greeting");
      expect(greetingElement).toHaveTextContent("Hello, Bapak Informatika");
    });
  });

  describe("AlertButton Component", () => {
    test("triggers alert with correct message when clicked", () => {
      const mockAlert = jest
        .spyOn(window, "alert")
        .mockImplementation(() => {});

      render(<AlertButton message="Selamat Datang!" />);
      const alertButton = screen.getByTestId("alert-button");

      fireEvent.click(alertButton);
      expect(mockAlert).toHaveBeenCalledWith("Selamat Datang!");

      mockAlert.mockRestore();
    });
  });
});
