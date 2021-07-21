import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./Dashboard";
import Health from "./Health";
import ThankYou from "./ThankYou";

import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/thankyou" component={ThankYou} />
            <PrivateRoute path="/health" component={Health} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
