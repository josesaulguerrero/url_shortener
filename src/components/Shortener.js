//libraries and hooks
//components
//assets

import { Button } from "./Button";

export const Shortener = () => {
   return (
      <section className="Shortener">
         <form className="Shortener__form">
            <input type="url" value="" placeholder="Shorten a link here..." />
            <Button type="primary--squared" content="Shorten it!" />
         </form>
      </section>
   );
};