//libraries and hooks
//components
import { Button } from "./Button";
import { Link } from "./Link";
//assets

export const Navbar = () => {
   const links = [
      {
         href: "#features",
         content: "Features",
      },
      {
         href: "#pricing",
         content: "Pricing"
      },
      {
         href: "#resources",
         content: "Resources",
      }
   ];
   return (
      <nav className="Navbar">
         <section className="Navbar__icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
         </section>
         <section className="Navbar__menu">
            <section className="Navbar__links">
               {
                  links.map(
                     ({ href, content }) => <Link key={href} href={href} content={content} />
                  )
               }
            </section>
            <hr className="Navbar__break-line" />
            <section className="Navbar__buttons">
               <Button type="secondary" content="Log in" />
               <Button type="primary" content="Sign up" />
            </section>
         </section>
      </nav>
   );
};