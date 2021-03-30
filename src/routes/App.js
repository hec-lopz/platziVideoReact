import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../components/Login.jsx";
import Home from "../containers/Home.jsx";
const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </BrowserRouter>
);

export default App;
