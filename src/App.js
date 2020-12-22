import React from "react";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import UpToTop from "./components/UpToTop.js";
import './stylesheet/app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
        <Header />
        <UpToTop />
        <div  className="body-content">  
            <Router>
                <Switch>
                    <Route path="/category/:category">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    </>
  );
}

export default App;
