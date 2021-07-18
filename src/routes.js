import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Orgs from "./pages/Orgs";
import OrgsList from "./pages/OrgsList";
import Donors from "./pages/Donors";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const PrivateRoute = ({ children, ...rest }) => {
  const isLogged = true;

  return (
    <Route {...rest}>{isLogged ? children : <Redirect to="/login" />}</Route>
  );
};

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/orgs" component={Orgs} />
    <PrivateRoute path="/orgslist" component={OrgsList} />
    <PrivateRoute path="/donors" component={Donors} />
    <PrivateRoute path="/about" component={About} />
    <PrivateRoute path="/contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
