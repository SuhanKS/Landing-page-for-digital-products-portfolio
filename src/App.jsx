import "./App.css";
import CompanyLogo from "./component/CopanyLogos";
import Faq from "./component/Faq";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Pricing from "./component/Pricing";
import Service1 from "./component/Service1";
import Service2 from "./component/Service2";
import Testimonial from "./component/Testimonial";

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
    </>
  );
}

export default App;
