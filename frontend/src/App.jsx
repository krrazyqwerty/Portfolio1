import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Socials } from "./components/Socials/Socials";

import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import  Contact  from "./components/Contact/Contact";
import { ExperienceAndSkills } from "./components/ExperienceAndSkills/ExperienceAndSkills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <ExperienceAndSkills/>
    
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
