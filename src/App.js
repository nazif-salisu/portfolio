import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Websites from "./Components/Websites/Websites";
import PortfolioArrays from "./Components/PortfolioArrays/PortfolioArrays";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Websites/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
