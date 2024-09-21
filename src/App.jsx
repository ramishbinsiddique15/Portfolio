import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Hero,
  Tech,
  Works,
  StarsCanvas,
  Footer
} from "./components";
import { Toaster } from 'react-hot-toast';


function App() {
  return <BrowserRouter>
  <Toaster />
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Feedbacks/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
    <Footer/>
  </div>
  </BrowserRouter>;
}

export default App;
