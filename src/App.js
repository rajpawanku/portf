import About from "./components/About";
import { Calender } from "./components/Calender";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";

import SocialLinks from "./components/SocialLinks";
import {Stack} from "./components/Stack";





function App() {
  return (
    <div >
      <NavBar  />
      <Home />
      <About />
      <Project />
      <Calender />
      <Stack />
      <Experience />
      <Contact />   
    </div>
  );
}

export default App;
