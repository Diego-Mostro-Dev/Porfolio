import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero.tsx';
/* import Projects from './components/Projects'; */
import Skills from './components/Skills';
import KeabordManager from './components/KeabordManager';

function App() {
  return (
    <>
      <main>
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        {/* <Projects></Projects> */}
        <Skills></Skills>
        <Education></Education>
      </main>
      <KeabordManager />
    </>
  );
}

export default App;
