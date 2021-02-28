import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./Articles";
import Home from "./Home";
import Headers from "./Headers";
import Demo from "./Demo";
import Company from "./Company";
import Footer from "./Footer";
import Platform from "./Platform";
import Contact from "./Contact";
import Pricing from "./Pricing";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
function App() {
  return (
    <>
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/features">
            <Features />
          </Route>
          <Route exact path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route exact path="/company-profile">
            <Company />
          </Route>
          <Route exact path="/free-demo">
            <Demo />
          </Route>
          <Route exact path="/platform">
            <Platform />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
