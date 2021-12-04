//libraries and hooks
import { useContext } from "react";
//components
import { LinkCard } from "./LinkCard";
//assets
//context
import { LinksContext } from "../context/LinksContext";

export const ShortenedLinks = () => {
   const { data } = useContext(LinksContext);
   return (
      <section className="ShortenedLinks">
         {data.map(({ original_link, short_link }, index) =>
            <LinkCard
               key={index}
               originalLink={original_link}
               ShortenedLink={short_link}
            />
         )}
      </section>
   );
};