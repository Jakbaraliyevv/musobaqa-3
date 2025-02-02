import "./navbar.scss";
import logo from "../../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav className="navLink">
            <h3>Demos</h3>
            <h3>Features</h3>
            <h3>Pricing</h3>
            <h3>Contact</h3>
          </nav>

          <div className="navBtn">
            <h3>Login</h3>
            <button>Sign up</button>
            <FaBars className="bars" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
