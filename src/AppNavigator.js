import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

//components
import HomeScreen from './containers/Home/HomeScreen'


class AppNavigator extends Component {
    render() {
      return (
        <Router>
          <div>
          <Route path="/" exact component={ HomeScreen }/>
          <Route path="/about" exact strict render={
            () => {
              return ( <h1>Welcome About</h1>);
            }
          }/>
          </div>
        
      </Router>
      );
    }
  }

export default AppNavigator;