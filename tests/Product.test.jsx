import { expect, it, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "../src/components/Product/Product";

describe("Product", () => {
  const PROPS = {
    id: 1,
    title: "shirt",
    price: 10,
    image: "image-url",
    setCartItems: vi.fn(),
  };

  it("should render product component with given props", () => {
    render(<Product {...PROPS} />);

    expect(screen.getByRole("heading")).toHaveTextContent(PROPS.title);
    expect(screen.getByRole("strong")).toHaveTextContent(`$${PROPS.price}`);
  });

  it("should increment/decrement the quantity when the button is clicked", async () => {
    const DEFAULT_QUANTITY = 1;
    const user = userEvent.setup();

    render(<Product {...PROPS} />);

    const incrementBtn = screen.getByRole("button", { name: "+" });
    const decrementBtn = screen.getByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton");

    expect(decrementBtn).toBeDisabled();
    await user.click(incrementBtn);
    expect(parseInt(input.value)).toBeGreaterThan(DEFAULT_QUANTITY);
    expect(decrementBtn).toBeEnabled();
    await user.click(decrementBtn);
    expect(parseInt(input.value)).toBe(DEFAULT_QUANTITY);
  });
});
