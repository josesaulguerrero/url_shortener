//libraries and hooks
import { useState } from "react";
//components
import { Button } from "./Button";
import { Link } from "./Link";
//assets
import styles from "../assets/styles/Navbar.module.css";

export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   // if isOpen is true, the navigation menu is open
   const links = [
      {
         href: "#features",
         content: "Features",
      },
      {
         href: "#pricing",
         content: "Pricing"
      },
      {
         href: "#resources",
         content: "Resources",
      }
   ];
   const onMenuClick = () => {
      setIsOpen((prevState) => !prevState);
   };
   return (
      <nav className={styles.Navbar}>
         <section
            className={`
               ${styles.NavbarIcon}
               ${isOpen && styles.icon__IsOpen}
            `}
            onClick={onMenuClick}
         >
            <div className={styles.iconLine}></div>
            <div className={styles.iconLine}></div>
            <div className={styles.iconLine}></div>
         </section>
         <section
            className={`
               ${styles.NavbarMenu}
               ${isOpen ? styles.NavbarMenu__IsOpen : styles.NavbarMenu__IsClosed}
            `}
         >
            <section className={styles.NavbarLinks}>
               {
                  links.map(
                     ({ href, content }) => <Link type="navlink" key={href} href={href} content={content} />
                  )
               }
            </section>
            <hr className={styles.NavbarBreakLine} />
            <section className={styles.NavbarButtons}>
               <Button type="ghost" content="Log in" />
               <Button type="rounded--small" content="Sign up" />
            </section>
         </section>
      </nav>
   );
};