//libraries and hooks
//components
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
            <button>Log in</button>
            <button>Sign up</button>
         </section>
      </nav>
   );
};