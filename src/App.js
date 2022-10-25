import About from "./components/About";
import { Calender } from "./components/Calender";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import {Stack} from "./components/Stack";


function App() {
  return (
    <div >
      <NavBar />
      <Home />
      
       <About />
      <Portfolio />
      <Calender />
      <Stack />
      <Experience />
      <Contact />   


      <SocialLinks />
    </div>
  );
}

export default App;
