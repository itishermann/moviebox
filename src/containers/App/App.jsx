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
  console.log(process.env)
  return (
    <Router basename={'/moviebox'}>
      <Header />
      <main className="main-container container-fluid px-0">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/movies/:id`} component={MovieDetail} />
          <Route path={`${process.env.PUBLIC_URL}/error`} component={Page404} />
          <Redirect from="*" to="/error" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
