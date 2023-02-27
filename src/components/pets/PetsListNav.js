import { Link } from "react-router-dom";
 
import "./PetsListNav.css";

// TODO -> the parent route to pet list data(the child route);
//  TODO : allows user to click on either all cats or all dogs to get sent to next page with either all cats selection or all dog selection

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to="/pets/dogs">See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
