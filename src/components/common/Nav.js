import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <article>
        <Link to="/">
          <h1>
            Northwest <span>Animal Hospital</span>
          </h1>
        </Link>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">
              <a href="/staff">All Staff</a>
            </Link>
          </li>
          <li>
            <Link to="/pets">
              <a href="/pets">All Pets</a>
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
