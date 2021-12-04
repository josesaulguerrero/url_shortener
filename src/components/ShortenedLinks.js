//libraries and hooks
import { useContext } from "react";
//components
import { LinkCard } from "./LinkCard";
//assets
import styles from "../assets/styles/ShortenedLinks.module.css";
//context
import { LinksContext } from "../context/LinksContext";

export const ShortenedLinks = () => {
   const { data } = useContext(LinksContext);
   return (
      <section className={styles.ShortenedLinks}>
         {data.map(({ original_link, short_link }, index) =>
            <LinkCard
               key={index}
               originalLink={original_link}
               shortenedLink={short_link}
            />
         )}
      </section>
   );
};