import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

export default () => (
  <Router>
    {/* Switch : 한번에 오직 하나의 Route만 Render하라 */}
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      {/* 일치하는 Route가 없다면 Redirect 해라 */}
      <Redirect from="*" to="/" />  
    </Switch>
  </Router>
)