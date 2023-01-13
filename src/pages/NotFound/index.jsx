import Header from "../../components/Header";
import PageHeading from "../../components/PageHeading";
import styles from "./styles.module.scss";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <PageHeading title='404' subHeading='Page not found' />
        <p>
          Oops! Looks like we've lost that page, but don't worry, there's plenty
          more to explore.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
