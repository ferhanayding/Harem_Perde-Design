import { lazy } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ErrorBoundary from "../utils/ErrorBoundary";
import LayoutRoute from "./LayoutRoute";

// pages import
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));

const AuthorizedRoutes = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <LayoutRoute exact path={"/"} component={Home} />
          <LayoutRoute exact path={"/home"} component={Home} />
          <LayoutRoute exact path={"/about"} component={About} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default AuthorizedRoutes;
