//libraries and hooks
//components
//assets

export const FeatureCard = ({ image, title, content }) => {
   return (
      <article className="FeatureCard">
         <img src={image} alt="feature illustration" className="FeatureCard__image" />
         <h5 className="FeatureCard__title">{title}</h5>
         <p className="FeatureCard__content">{content}</p>
      </article>
   );
};