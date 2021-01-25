import React from 'react'
import Home from './pages/Home'
import Todos from './pages/Todos'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

const  App =() => {

  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route 
          path='/todo/:id'
          render={({ match }) => {
            const { id } = match.params;
            return <Todos userId={id} />;
          }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
