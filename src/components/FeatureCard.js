//libraries and hooks
//components
//assets
import styles from "../assets/styles/FeatureCard.module.css";

export const FeatureCard = ({ image, title, content }) => {
   return (
      <article className={styles.FeatureCard}>
         <figure className={styles.FeatureCardImage}>
            <img src={image} alt="feature illustration" />
         </figure>
         <h5 className={styles.FeatureCardTitle}>{title}</h5>
         <p className={styles.FeatureCardContent}>{content}</p>
      </article>
   );
};