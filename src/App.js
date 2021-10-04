import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteDisplay from "./components/NoteDisplay";
import Donate from "./components/Donate";
import ExpandedNote from "./components/ExpandedNote";
import ThemeProvider from "./components/ThemeContext";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

function App() {

  return (
    <ThemeProvider>
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
      <Footer />
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
