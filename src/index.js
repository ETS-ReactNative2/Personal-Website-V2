import React from 'react';
import ReactDOM from 'react-dom';
import About from './pages/About';
import Headbar from './components/Headbar/Headbar';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Projects from './pages/Projects';
import Wine from './pages/Wine';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Headbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/travel" component={Travel} /> */}
        <Route path="/wine" component={Wine} />
        {/* <Route path="/books" component={Books} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
