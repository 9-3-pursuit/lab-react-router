import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import NotFound from "./components/common/NotFound";

import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  const checkKind = () => {
    pets.map((pet) => {
      console.log('type of pet', pet.kind)
    })
  }

  checkKind()

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav/>
          
        
        <Routes>
          <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
          <Route path="/staff" element={<StaffList employees={employees} />} />
          <Route path="/pets" element={<Navigate to="/pets/cats" />} />
          <Route path="/pets/cats" element={<PetsList pets={pets.filter(pet => pet.kind.toLowerCase() === "cat")} />} />
          <Route path="/pets/dogs" element={<PetsList pets={pets.filter(pet => pet.kind.toLowerCase() === "dog")} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
