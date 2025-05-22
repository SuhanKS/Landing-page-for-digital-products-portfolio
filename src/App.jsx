import "./App.css";
import CompanyLogo from "./components/CompanyLogo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Service1 from "./components/Service1";
import Service2 from "./components/Service2";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <CompanyLogo></CompanyLogo>
      <Service1></Service1>
      <Service2></Service2>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <Faq></Faq>
      <Trial></Trial>
      <Footer></Footer>
    </>
  );
}

export default App;
