//libraries and hooks
//components
import { Navbar } from './Navbar';
//assets
import logo from '../assets/images/logo.svg';
import { Logo } from './Logo';

export const Header = () => {
   return (
      <header className="Header">
         <section className="Header__logo">
            <Logo color="#000" />
         </section>
         <Navbar />
      </header>
   );
};