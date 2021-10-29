import { Route, Switch } from "react-router";
import Home from "../Pages/Home"
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/dashboard.jsx"
function Routes (){
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route  path="/register">
                <Register />
            </Route>
            <Route  path="/dashboard">
                <Dashboard />

            </Route>
        </Switch>
    )
}
export default Routes;