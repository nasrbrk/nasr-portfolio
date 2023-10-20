import "./app.scss"
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Parallax from "./component/parallax/Parallax";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services/>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio/>
      <section id="Contact">
        <C
      </section>
    </div>
  );
};

export default App;
