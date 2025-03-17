import styles from './app.module.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
