import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import "./css/content.css";
import Header from "./components/Header";
import Welcome from "./screen/WelcomePage";
import Login from "./screen/Login";
import Register from "./screen/Register";

class App extends Component {
  state = {
    showDropdown: false
  };

  toggleShowDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            toggleShowDropdown={this.toggleShowDropdown}
            showDropdown={this.state.showDropdown}
          />
          <Route exact path="/" component={Welcome} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
