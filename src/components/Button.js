//libraries and hooks
//components
//assets
import styles from "../assets/styles/Button.module.css";

export const Button = ({
   type = "primary",
   content = "write something",
   disabled = false,
   onClick = function () { }
}) => {
   return (
      <button onClick={onClick} disabled={disabled} className={styles.Button} type={type} >
         {content}
      </button>
   );
};