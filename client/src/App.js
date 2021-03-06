import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navigation";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Settings from "./components/Settings";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} clearUser={this.setUser} />

        {this.state.user ? (
          <Route
            exact
            path="/"
            render={props => <Chat user={this.state.user} {...props} />}
          />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        <Route
          exact
          path="/login"
          render={props => (
            <Login user={this.state.user} setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <Signup user={this.state.user} setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/auth/google"
          render={props => (
            <Signup user={this.state.user} setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/settings"
          render={props => (
            <Settings user={this.state.user} setUser={this.setUser} {...props} />
          )}
          // setUser={this.setUser}
          // component={Settings}
        />
        <Route exact path="/about" setUser={this.setUser} component={About} />
      </div>
    );
  }
}

export default App;
