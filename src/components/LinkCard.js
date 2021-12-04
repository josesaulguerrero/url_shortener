//libraries and hooks
//assets
//components
import { CopyToClipboard } from "./copyToClipboard";

export const LinkCard = ({ originalLink, ShortenedLink }) => {
   return (
      <article className="LinkCard">
         <p className="LinkCard__original-link">{originalLink}</p>
         <p className="LinkCard__shortened-link">{ShortenedLink}</p>
         <CopyToClipboard shortenedLink={ShortenedLink} />
      </article>
   );
};