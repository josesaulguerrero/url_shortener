//libraries and hooks
//components
//assets

export const Button = ({
   type = "primary",
   content
}) => {
   console.log(content);
   return (
      <button className={type}>{content}</button>
   );
};