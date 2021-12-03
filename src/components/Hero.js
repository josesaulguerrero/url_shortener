//libraries and hooks
//components
import { Button } from './Button';
//assets
import image from '../assets/images/illustration-working.svg';

export const Hero = () => {
   return (
      <main className="Hero">
         <img src={image} alt="person working on a computer" width="80%" className="Hero__img" />
         <h1 className="Hero__title">More than just shorter links</h1>
         <p className="Hero__description">Build your brand's recognition and get detailed insights on how your links are performing.</p>
         <Button type="rounded--large" content="Get started" />
      </main>
   );
};