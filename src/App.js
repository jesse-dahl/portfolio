import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
        </Switch>
      </main>
    )
  }
}

export default App;
