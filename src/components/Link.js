//libraries and hooks
//components
//assets

export const Link = ({ href = "#", content = "write something" }) => {
   return (
      <a href={href}>{content}</a>
   );
};