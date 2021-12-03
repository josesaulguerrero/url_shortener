//libraries and hooks
//components
import { Button } from "./Button";
//assets

export const Navbar = () => {
   return (
      <nav className="Navbar">
         <section className="Navbar__links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
         </section>
         <hr className="Navbar__break-line" />
         <section className="Navbar__buttons">
            <Button type="secondary" content="Log in" />
            <Button type="primary" content="Sign up" />
         </section>
      </nav>
   );
};