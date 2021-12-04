//libraries and hooks
//components
import { Button } from './Button';
//assets
import image from '../assets/images/illustration-working.svg';
import styles from "../assets/styles/Hero.module.css";

export const Hero = () => {
   return (
      <main className={styles.Hero}>
         <section className={styles.HeroImg}>
            <img src={image} alt="person working on a computer" width="80%" />
         </section>
         <section className={styles.HeroContent}>
            <h1 className={styles.HeroTitle}>More than just shorter links</h1>
            <p className={styles.HeroDescription}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Button type="rounded--large" content="Get started" />
         </section>
      </main>
   );
};