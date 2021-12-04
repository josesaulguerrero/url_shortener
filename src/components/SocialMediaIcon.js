//libraries and hooks
//components
//assets
import styles from "../assets/styles/SocialMediaIcon.module.css";

export const SocialMediaIcon = ({ name, image, href }) => {
   return (
      <a href={href} title={name} className={styles.SocialMediaIcon}>
         <img src={image} alt={name} className={styles.SocialMediaIconImage} width="30px" height="30px" />
      </a>
   );
};