import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteDisplay from "./components/NoteDisplay";
import Upgrade from "./components/Upgrade";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

function App() {

  return (
    <Router>
      <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <NoteDisplay/>
          </Route>
          <Route path="/upgrade">
            <Upgrade/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
