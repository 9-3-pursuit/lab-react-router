import React from "react";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import { Route, Link, Switch } from "react-router-dom";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pets" component={PetsList} />
          <Route path="/staff" component={StaffList} />
        </Switch>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default App;
