import "./App.css";
import Faq from "./assets/components/faq";
import Hero from "./assets/components/hero";
import Navbar from "./assets/components/navbar";
import Section2 from "./assets/components/marquee-pricing";
import Section3 from "./assets/components/section3-4";
import Footer from "./assets/components/footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section2></Section2>
      <Section3></Section3>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}

export default App;
