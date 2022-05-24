import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import OrderSummary from "./OrderSummary";

expect.extend(toHaveNoViolations);

describe("OrderSummary Component", () => {
  it("Should render without axe a11y errors", async () => {
    render(<OrderSummary />);
    expect(await axe(screen.getByText(/order summary/i))).toHaveNoViolations();
  });
});
