import "./navbar.scss";
import logo from "../../../assets/logo.svg";
function Navbar() {
  return (
    <section className="navbar">
      <div className="container">
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="navLink">
            <h3>Demos</h3>
            <h3>Features</h3>
            <h3>Pricing</h3>
            <h3>Contact</h3>
          </div>

          <div className="navBtn">
            <h3>Login</h3>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
