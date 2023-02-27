import { Link } from "react-router-dom"
// * ^--- Link is React Router's version of an anchor a tag.
// remove the anchor a tags already on the code since <Link></Link> will replace it
// Otherwise, you won't get the functionality of the router.

// TODO -> Link placed in lines w/ a tags to make clickable links --v

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
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            <Link to="/pets">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
