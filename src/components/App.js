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

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Shortener />
      <ShortenedLinks />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};
