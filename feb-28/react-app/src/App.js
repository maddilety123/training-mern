import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <nav className="nav-container">
        <h1 className="heading">Wizard App</h1>
        <ul className="links-conainer">
          <li>
            <Link to="/home" className="route-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sample" className="route-link">
              Sample
            </Link>
          </li>
          <li>
            <Link to="/about" className="route-link">
              About
            </Link>
          </li>
        </ul>

        <Outlet />
      </nav>
    </div>
  );
}

export default App;
