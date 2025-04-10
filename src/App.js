import "./App.css";
import Start from "./components/Start";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Start />
        <About />
        <Contact />
        <Projects/>
      </header>
    </div>
  );
}

export default App;
