import { useOutletContext } from "react-router-dom";
import Product from "../../components/Product/Product";
import styles from "./Products.module.css";

function Products() {
  const { data, setCartItems, loading } = useOutletContext();

  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <div className={styles.loading}>Loading</div>
        </div>
      ) : (
        <>
          <h1>Products</h1>
          <article className={styles.container}>
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <Product
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    setCartItems={setCartItems}
                  />
                </li>
              ))}
            </ul>
          </article>
        </>
      )}
    </>
  );
}

export default Products;
