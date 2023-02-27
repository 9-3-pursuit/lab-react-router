import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
// TODO ^ ----> breakdown of each part & why it is there --- v
// * useNavigate -> 
// * hook returns a function that lets you navigate programmatically

// * useParams ->
// * hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the '<Route path>'
// * child routes inherit all params from their parent routes.

// * Navigate ->
// * element changes the current location when it is rendered.
// * a component wrapper around `useNavigate`, & accepts all the same arguements as props.

// * useEffect ->
// * hook allows you to perform side effects in your components(i.e: fetching data,directly updating the DOM & timers)
// * accepts two arguments. The second arguement is optional (i.e: useEffect(<function>,<dependency>))

export const PetsList = ({ pets }) => {

  let { kind } = useParams() // * sets the return to the different kind of cats/dogs
  let Navigate = useNavigate() // * sets navigate to the hook useNavigate() to w/rendered info from the page data

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  //* this will change the rendered info according to the desired info clicked w/ useEffect()
  useEffect(() => {
    if (kind === undefined) {
      Navigate("/pets/cats")
    }
  })

  // ! Wildcard route in react -> also known as nested routes in react
  // ! Nested routing means routes inside another route
  // ! has limitations if only these are used & that limits the nested child components when attempting to open
  // ! it will only show or render the parent component page only. 

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">

        {/* All cats section */}
        {kind === 'cats' || kind === undefined ?

          // * if kind equals cats OR undefined then (w/  ternary operator ?) map through the cat data
          // * null -> then return nothing b/c the info can not be found
          cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          )) : null}





        {/* All dogs section */}
        {kind === 'dogs' || kind === undefined ?
          // * if kind equals dogs OR undefined then (w/  ternary operator ?) map through the dog data
          // * null -> then return nothing b/c the info can not be found
          dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          )) : null}



      </section>
    </section>
  );
};

export default PetsList;
