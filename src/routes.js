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

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={()=><Home{...props}/>} />
    <Route path="/login" component={()=><Login{...props}/>} />
    <PrivateRoute path="/orgs" component={()=><Orgs{...props}/>} />
    <PrivateRoute path="/orgslist" component={()=><OrgsList{...props}/>} />
    <PrivateRoute path="/donors" component={()=><Donors{...props}/>} />
    <PrivateRoute path="/about" component={()=><About{...props}/>} />
    <PrivateRoute path="/contact" component={()=><Contact{...props}/>} />
    <Route path="*" component={()=><NotFound{...props}/>} />
  </Switch>
);

export default Routes;
