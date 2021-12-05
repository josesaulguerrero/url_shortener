//libraries and hooks
//components
//assets
import styles from "../assets/styles/Loader.module.css";

export const Loader = () => {
   return (
      <section className={styles.Loader}>
         <div className={styles.LoaderBall}></div>
         <div className={styles.LoaderBall}></div>
         <div className={styles.LoaderBall}></div>
      </section>
   );
};