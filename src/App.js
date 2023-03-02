import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import StaffList from './Components/StaffList';
import PetsList from './Components/PetsList';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/staff" component={StaffList} />
          <Route exact path="/pets" render={() => <Redirect to="/pets/cats" />} />
          <Route exact path="/pets/cats" render={() => <PetsList animal="cat" />} />
          <Route exact path="/pets/dogs" render={() => <PetsList animal="dog" />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
