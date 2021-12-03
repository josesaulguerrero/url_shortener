//libraries and hooks
//components
//assets

export const SocialMediaIcon = ({ name, image, href }) => {
   return (
      <a href={href} title={name} className="SocialMediaIcon">
         <img src={image} alt={name} className="SocialMediaIcon__image" />
      </a>
   );
};