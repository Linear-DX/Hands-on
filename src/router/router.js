import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Home from "../pages/home/home";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <h1>ini home oi</h1>
                </Route>
                <Route path="/search">
                    <Home />
                </Route>
                <Route path="/">
                    <button><Link to ="/search">go to Search Bar</Link></button>
                    <Link to ="/about us">About Us</Link>
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;