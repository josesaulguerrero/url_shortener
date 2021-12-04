//libraries and hooks
//components
import { Button } from "./Button";
//assets
import styles from "../assets/styles/Pricing.module.css";

export const Pricing = () => {
   return (
      <section className={styles.Pricing} id="pricing" >
         <h2 className={styles.PricingTitle} >Boost your links today</h2>
         <Button type="rounded--large" content="Get Started" />
      </section>
   );
};