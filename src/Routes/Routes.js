import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "./Landing";
import Link from "./Link";

export default () => {
    return (
        <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/link/:value" component={Link} />
                <Redirect from="*" to="/" />
        </Switch>
    )
}