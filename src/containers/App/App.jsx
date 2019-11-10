import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Footer from "../Footer";
import Home from "../Home";
import Page404 from "../Page404";
import Header from "../Header";
import MovieDetail from "../MovieDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-container container-fluid px-0">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:id" component={MovieDetail} />
          <Route path="/error" component={Page404} />
          <Redirect from="*" to="/error" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
