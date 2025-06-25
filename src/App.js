import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Hobbies from './components/sections/Hobbies';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;