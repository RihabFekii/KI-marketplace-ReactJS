
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import AiFlow from "views/examples/AI_workflow.js";
import LoginPage from "views/examples/LoginPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import AboutUs from "views/index-sections/AboutUs.js" ;
import AiMarketplace from "views/examples/AiMarketplace.js"
import DataMarketplace from "views/examples/DataMarketplace.js"
import AddForm from "views/form/Checkout.js"
import AddDataset from "views/form/AddDataset.js"
import Post from "views/ProductDescription/Blog"
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />

      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/flow"
        render={props => <AiFlow {...props} />}
      />

      <Route
        path="/login-page"
        render={props => <LoginPage {...props} />}
      />

      <Route
        path="/About-Us"
        render={props => <AboutUs {...props} />}      
      />

      <Route
        path="/ai-marketplace"
        render={props => <AiMarketplace {...props} />}
      />

<Route
        path="/data-marketplace"
        render={props => <DataMarketplace {...props} />}
      />
     
     <Route
        path="/addform"
        render={props => <AddForm {...props} />}
      />

      <Route
        path="/add_dataset"
        render={props => <AddDataset {...props} />}
      />
  
     <Route
        path="/blog"
        render={props => <Post {...props} />}
      />

      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
