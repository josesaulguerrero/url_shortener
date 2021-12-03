//libraries and hooks
//components
//assets
import styles from "../assets/styles/Link.module.css";

export const Link = ({ href = "#", content = "write something", type }) => {
   return (
      <a
         href={href}
         className={styles.Link}
         type={type}
      // I will add styles depending on the type of the link
      >{content}</a>
   );
};