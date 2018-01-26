import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import { HashRouter, Route } from 'react-router-dom';


const App = () => (
  <HashRouter>
    <Route path="/" exact component={Home} />
  </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
