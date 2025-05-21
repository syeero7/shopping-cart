import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Fake store</h1>
      <p>
        Welcome to The Fake Store, your new favorite destination for all your
        shopping needs! We're thrilled to have you here, whether you're looking
        for everyday essentials, unique finds, or just want to browse and
        discover something new.
      </p>
    </div>
  );
}

export default Home;
