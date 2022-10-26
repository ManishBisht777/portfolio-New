import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./styles/main.css";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";
import Contact from "./components/contact/Contact";
import Socials from "./components/social/Socials";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Project />
        <Skill />
        <Contact />
        <Socials />
      </main>
    </>
  );
}

export default App;
