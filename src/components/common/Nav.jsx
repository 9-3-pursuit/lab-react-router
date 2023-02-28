import { NavLink as Link } from "react-router-dom";
import "./styles/Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/" activeClassName="active">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <nav>
        <ul>
          <li>
            <Link to="/staff" activeClassName="active">
              All Staff
            </Link>
          </li>
          <li>
            <Link to="/pets" activeClassName="active">
              All Pets
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
