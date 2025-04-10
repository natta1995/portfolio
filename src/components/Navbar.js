import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#start">Start</a>
          </li>
          <li>
            <a href="#about">Om mig</a>
          </li>
          <li>
            <a href="#projects">Projekt</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
