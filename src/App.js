import React from 'react';
import { connect } from 'react-redux'
import { fetchPatterns } from './actions/fetchPatterns'
import PatternsContainer from './containers/patternsContainer'
import PatternInput from './components/PatternInput'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPatterns()
    
  }

  render(){
    return (
      <div className="App">
        <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/patterns' component={PatternsContainer} />
        </Switch>
        </Router>
      </div>
    );
  }
}


export default connect(null, { fetchPatterns })(App);
