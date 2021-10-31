import { Redirect, Route, Switch } from "react-router";
import Home from "../Pages/Home"
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/dashboard.jsx"
import { useUsers } from "../Providers/Users";
import { useEffect,useState } from "react";
import CheckoutOrder from "../Pages/Dashboard/checkoutOrder";
import Menu from "../Pages/Menu";
import Orders from "../Pages/Dashboard/Orders";
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
            <Route exact  path="/">
                {Token ? <Redirect to="/" /> : <Menu/> }
            </Route>
            <Route path="/login">
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
            <Route  path="/checkoutOrder">
                {Token ? <CheckoutOrder/> : <Redirect to="/" /> }
            </Route>
            <Route  path="/orders">
                {Token ? <Orders/> : <Redirect to="/" /> }
            </Route>
        </Switch>
    )
}
export default Routes;