import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">War Thunder</span>

        <div className="navbar-nav">
          <NavLink className="nav-link" to="/historia">
            Historia
          </NavLink>

          <NavLink className="nav-link" to="/tanques">
            Tanques
          </NavLink>

          <NavLink className="nav-link" to="/aviones">
            Aviones
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
