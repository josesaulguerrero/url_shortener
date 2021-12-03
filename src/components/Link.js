//libraries and hooks
//components
//assets

export const Link = ({ href = "#", content = "write something", type }) => {
   return (
      <a
         href={href}
         className={type}
      // I will add styles depending on the type of the link
      >{content}</a>
   );
};