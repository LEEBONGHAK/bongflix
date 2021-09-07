import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      {/* Switch : 한번에 오직 하나의 Route만 Render하라 */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/tv/:id" component={Detail} />
        {/* 일치하는 Route가 없다면 Redirect 해라 */}
        <Redirect from="*" to="/" />  
      </Switch>
    </>
  </Router>
)