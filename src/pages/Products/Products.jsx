import { useOutletContext } from "react-router-dom";
import Product from "../../components/Product/Product";

function Products() {
  const { data, setCartItems, loading, cart } = useOutletContext();

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <article>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  setCartItems={setCartItems}
                  itemQuantity={cart[item.id]?.quantity}
                />
              </li>
            ))}
          </ul>
        </article>
      )}
    </>
  );
}

export default Products;
