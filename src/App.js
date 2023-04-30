import About from "./components/About";
import { Calender } from "./components/Calender";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";

// import SocialLinks from "./components/SocialLinks";
import {Stack} from "./components/Stack";





function App() {
  return (
    <div >
      <NavBar  id="nav-menu" />
      <Home id="home"/>
      <About  id="about" class="about section" />
      <Project id="projects"/>
      <Calender />
      <Stack />
      <Experience id="skills" />
      <Contact id="contact"/>   
    </div>
  );
}

export default App;
