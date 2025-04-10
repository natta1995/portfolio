import "./App.css";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <section id="start">
          <Start />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </header>
    </div>
  );
}

export default App;
