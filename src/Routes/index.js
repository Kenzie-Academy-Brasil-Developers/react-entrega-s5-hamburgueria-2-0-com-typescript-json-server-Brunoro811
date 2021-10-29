import { Redirect, Route, Switch } from "react-router";
import Home from "../Pages/Home"
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/dashboard.jsx"
import { useUsers } from "../Providers/Users";
import { useEffect,useState } from "react";
function Routes (){
    const [Token, setToken] = useState(
        () => localStorage.getItem("@kenzie_burguer") || ""
      );
    const {singIn} = useUsers()
    useEffect(()=>{
       setToken(() => localStorage.getItem("@kenzie_burguer") || "")
    },[singIn])
    return (
        <Switch>
            <Route exact path="/">
                {Token ? <Redirect to="/dashboard" /> : "" }
                <Home />
            </Route>
            <Route  path="/register">
                {Token ? <Redirect to="/dashboard" /> : "" }
                <Register />
            </Route>
            <Route  path="/dashboard">
                {Token ? <Dashboard /> : <Redirect to="/" /> }
            </Route>
        </Switch>
    )
}
export default Routes;