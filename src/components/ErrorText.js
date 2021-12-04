//libraries and hooks
//components
//assets
import styles from "../assets/styles/ErrorText.module.css";

export const ErrorText = ({ content }) => {
   return (
      <span className={styles.ErrorText}>
         {content}
      </span>
   );
};