import React from "react";
import Home from "./pages/Home.js";
import Main from "./pages/Main.js";
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
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </div>
    </>
  );
}

export default App;
