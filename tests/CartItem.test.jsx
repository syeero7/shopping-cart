import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "../src/components/CartItem/CartItem";

describe("CartItem", () => {
  const PROPS = {
    id: 1,
    title: "shirt",
    price: 10,
    image: "img-url",
    quantity: 2,
  };

  it("should render CartItem with given props", () => {
    render(<CartItem {...PROPS} />);

    expect(screen.getByRole("heading")).toHaveTextContent(PROPS.title);
    expect(screen.getByRole("strong")).toHaveTextContent(`$${PROPS.price}`);
    expect(screen.getByText(/quantity/i)).toHaveTextContent(/2/);
  });
});
