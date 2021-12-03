//libraries and hooks
//components
import { Navbar } from './Navbar';
import { Logo } from './Logo';
//assets
import styles from "../assets/styles/Header.module.css";

export const Header = () => {
   return (
      <header className={styles.Header}>
         <section className="Header__logo">
            <Logo color="#000" />
         </section>
         <Navbar />
      </header>
   );
};