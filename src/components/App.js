//libraries and hooks
//components
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { ShortenedLinks } from "./ShortenedLinks";
import { Shortener } from "./Shortener";
//assets
//context
import { LinksContextProvider } from "../context/LinksContext";

export const App = () => {
  return (
    <div className="App">
      <LinksContextProvider>
        <Header />
        <Hero />
        <Shortener />
        <ShortenedLinks />
        <Features />
        <Pricing />
        <Footer />
      </LinksContextProvider>
    </div>
  );
};
