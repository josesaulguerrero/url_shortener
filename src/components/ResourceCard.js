//libraries and hooks
//components
import { Link } from "./Link";
//assets

export const ResourceCard = ({ title, links }) => {
   return (
      <article className="ResourceCard">
         <h6 className="ResourceCard__title">{title}</h6>
         {
            links.map(
               ({ content }) =>
                  <Link
                     type="footer-link"
                     href="#"
                     key={content}
                     content={content}
                  />
            )
         }
      </article>
   );
};