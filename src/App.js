import "./App.css";
import About from "./components/About";
import Projects from "./components/Project";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About />
        <Projects/>
      </header>
    </div>
  );
}

export default App;
