import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/about/about";

function App() {
  return (
    <div >
      <div >
        <Header value={"Animal Kingdom"} />
        
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
