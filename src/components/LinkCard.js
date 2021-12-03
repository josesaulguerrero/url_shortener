//libraries and hooks
//assets
//components
import { Button } from "./Button";

export const LinkCard = ({ originalLink, ShortenedLink }) => {
   return (
      <article className="LinkCard">
         <p className="LinkCard__original-link">{originalLink}</p>
         <p className="LinkCard__shortened-link">{ShortenedLink}</p>
         <Button type="squared--small" content="copy" />
      </article>
   );
};