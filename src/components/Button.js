//libraries and hooks
//components
//assets
import styles from "../assets/styles/Button.module.css";

export const Button = ({
   type = "primary",
   content = "write something"
}) => {
   return (
      <button className={styles.Button} type={type} >
         {content}
      </button>
   );
};