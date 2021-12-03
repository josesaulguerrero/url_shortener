//libraries and hooks
//components
//assets
import "../assets/styles/Link.css";

export const Link = ({ href = "#", content = "write something", type }) => {
   return (
      <a
         href={href}
         className={`Link ${type}`}
      // I will add styles depending on the type of the link
      >{content}</a>
   );
};