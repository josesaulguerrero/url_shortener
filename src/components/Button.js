//libraries and hooks
//components
//assets

export const Button = ({
   type = "primary",
   content = "write something"
}) => {
   return (
      <button className={type}>{content}</button>
   );
};