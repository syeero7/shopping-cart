import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";

describe("Navbar", () => {
  const CART_ITEM_COUNT = 5;

  const getElement = (name) => {
    const link = screen.getByRole("link", { name });
    return { link, listItem: link.parentElement };
  };

  it("should render navbar", () => {
    render(
      <MemoryRouter>
        <Navbar itemCount={CART_ITEM_COUNT} />
      </MemoryRouter>
    );

    const home = getElement(/home/i);
    const products = getElement(/products/i);
    const cart = getElement(/cart/i);
    const count = screen.getByLabelText(/count/i);

    expect(home.listItem).toContainElement(home.link);
    expect(products.listItem).toContainElement(products.link);
    expect(cart.listItem).toContainElement(cart.link);
    expect(cart.listItem).toContainElement(count);
    expect(count).toHaveTextContent(CART_ITEM_COUNT);
  });
});
