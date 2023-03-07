import { Link } from "react-router-dom";
import PetsList from "../pets/PetsList";
import "./Nav.css";


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
            <h3>All Staff</h3>
          </Link>
          </li>
          <li>
          <Link to="/pets">
            <h3>All Pets</h3>
           
          </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

          

export default Nav;
          
          
          
