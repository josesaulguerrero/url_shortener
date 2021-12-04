//libraries and hooks
//components
import { FeatureCard } from "./FeatureCard";
//assets
import brandRecognitionIllustration from "../assets/images/icon-brand-recognition.svg";
import detailedRecordsIllustration from "../assets/images/icon-detailed-records.svg";
import fullyCustomizableIllustration from "../assets/images/icon-fully-customizable.svg";
import styles from "../assets/styles/Features.module.css";

export const Features = () => {
   const CardsInfo = [
      {
         image: brandRecognitionIllustration,
         title: "Brand Recognition",
         content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in you content."
      },
      {
         image: detailedRecordsIllustration,
         title: "Detailed Records",
         content: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      },
      {
         image: fullyCustomizableIllustration,
         title: "Fully Customizable",
         content: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      }
   ];
   return (
      <section className={styles.Features} id="features">
         <h2 className={styles.FeaturesTitle}>Advanced Statistics</h2>
         <p className={styles.FeaturesDescription}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
         <section className={styles.Cards}>
            {
               CardsInfo.map(
                  ({ image, title, content }) => <FeatureCard key={title} image={image} title={title} content={content} />
               )
            }
         </section>
      </section>
   );
};