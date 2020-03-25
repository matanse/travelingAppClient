import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./screen/WelcomePage";
import Login from "./screen/Login";
import Register from "./screen/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/WelcomePage" component={Welcome} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
