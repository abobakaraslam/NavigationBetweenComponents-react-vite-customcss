// File: Navbar.jsx located in root-directory/src/component/
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/login-user">Login</Link>

        <a href="/register-user">Register</a>
      </nav>
    </div>
  );
}

export default Navbar;