import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home.js";
import { About } from './pages/About';
import { ArticleListPage } from './pages/ArticlesListPage';
import {Article} from './pages/Article';
import {NavBar} from '../NavBar';
import NotFoundPage from './pages/NotFoundPage'


export const App = props => {
  return (
    <Router>
      <div id="page-body">
        <NavBar/> 
        <Switch>
      <Route exact path="/" component={Home} />
      <Route       path="/about" component={About} />
      <Route       path="/articles-list" component={ArticleListPage} />
      <Route       path="/article/:name" component={Article} />
      <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
  );
};



