import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as mainRouters from "../constants";
import Home from "../screens/home";
import InsideTheApp from "../screens/insideApp";

const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={mainRouters.insideTheApp}
                    component={InsideTheApp}
                />
                <Route exact path={mainRouters.home} component={Home} />
            </Switch>
        </Router>
    );
};

export default MainRouter;
