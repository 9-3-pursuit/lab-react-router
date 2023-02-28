import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <header>
      <article>
        <h1>
          {/* <a href="/"> */}
          <Link to={"/"} >
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            {/* <a href="/staff">All Staff</a> */}
            {/* <Link to={"/staff"}><a>All Staff</a></Link>   */}
            <Link to={"/staff"}>All Staff</Link>
            
          </li>
          <li>
            {/* <a href="/pets">All Pets</a> */}
            {/* <Link to={"/pets"}><a>All Pets</a></Link> */} 
            <Link to={"/pets"}>All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
