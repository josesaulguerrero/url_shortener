//libraries and hooks
//components
import { Header } from "./Header";
import { Hero } from "./Hero";
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
    </div>
  );
};
