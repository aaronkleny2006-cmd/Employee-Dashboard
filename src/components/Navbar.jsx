
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light">
      <div className="container-fluid px-0">
        <NavLink className="navbar-brand" to="/">
          People
        </NavLink>

        <div className="navbar-nav ms-auto flex-row">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/employee-form"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Employee Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
