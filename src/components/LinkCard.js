//libraries and hooks
//assets
import styles from "../assets/styles/LinkCard.module.css";
//components
import { Button } from "./Button";

export const LinkCard = ({ originalLink, shortenedLink }) => {
   const copyLinkToClipboard = (link) => {
      console.log(link, shortenedLink);
      navigator.clipboard.writeText(String(link));
   };
   return (
      <article className={styles.LinkCard}>
         <p className={styles.originalLink}>{originalLink}</p>
         <p className={styles.shortenedLink}>{shortenedLink}</p>
         <Button type="square--small" content="copy!" onClick={() => copyLinkToClipboard(shortenedLink)} />
      </article>
   );
};