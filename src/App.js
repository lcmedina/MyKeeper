import React from "react";
import Header from "./components/Header";
import NoteDisplay from "./components/NoteDisplay";
import Donate from "./components/Donate";
import ExpandedNote from "./components/ExpandedNote";
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
          <Route path="/donate">
            <Donate/>
          </Route>
          <Route path="/notes/:id">
            <ExpandedNote/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;
