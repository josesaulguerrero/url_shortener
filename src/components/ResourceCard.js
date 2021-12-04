//libraries and hooks
//components
import { Link } from "./Link";
//assets
import styles from "../assets/styles/ResourceCard.module.css";

export const ResourceCard = ({ title, links }) => {
   return (
      <article className={styles.ResourceCard}>
         <h6 className={styles.ResourceCardTitle}>{title}</h6>
         {
            links.map(
               ({ content }) =>
                  <Link
                     type="footerLink"
                     href="#"
                     key={content}
                     content={content}
                  />
            )
         }
      </article>
   );
};