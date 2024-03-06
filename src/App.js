import { FaGithub } from 'react-icons/fa';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <div className="footerContent">
          <p>&copy; 2024 nwrshrestha.com.np | All rights reserved.</p>
          <a
            href="https://github.com/prshnt-bhushal"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
