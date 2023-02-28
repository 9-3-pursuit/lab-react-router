import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./styles/PetsList.css";

// Using v6 router
import { Routes, Route, Navigate } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />

      <Routes>
        <Route
          path="/cats"
          element={
            <section className="pets-list">
              {cats.map((cat) => (
                <Pet key={cat.id} kind="cat" pet={cat} />
              ))}
            </section>
          }
        />
        ;
        <Route
          path="/dogs"
          element={
            <section>
              {dogs.map((dog) => (
                <Pet key={dog.id} kind="dog" pet={dog} />
              ))}
            </section>
          }
        />
        ;{/* works with absolute path and relative. lets go with relative */}
        <Route path="/*" element={<Navigate to="cats" />} />;
      </Routes>
    </section>
  );
};

export default PetsList;
