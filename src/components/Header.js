//libraries and hooks
//components
import { Navbar } from './Navbar';
//assets
import logo from '../assets/images/logo.svg';

export const Header = () => {
   return (
      <header className="Header">
         <section className="logo">
            <img src={logo} alt="Shortly" className="logo__img" width='130' height='35' />
         </section>
         <Navbar />
      </header>
   );
};