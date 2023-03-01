import "./PetsListNav.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to={"/pets/cats"}>See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to={"/pets/dogs"}>See All Dogs ({dogs.length})</Link>
        </li>

      {/* <Routes>
         <Route path="/" element={<Navigate to="/pets/cats"  /> } />
         <Route path="/" element={<Navigate to="/pets/dogs"  /> } />

      </Routes> */}


      </ul>
    </nav>
  );
};

export default PetsListNav;
