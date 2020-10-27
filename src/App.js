import React from 'react';
import './App.css'
import { connect } from 'react-redux'
import { fetchPatterns } from './actions/fetchPatterns'
import PatternsContainer from './containers/PatternsContainer'
import PatternInput from './components/PatternInput'
import Home from './components/Home'
import NavBar from './components/NavBar'
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
          <Route exact path='/patterns/new' component={PatternInput} />
          {/* <Route exact path= '/patterns/:id/materials' component={PatternsContainer} /> */}
        </Switch>
        </Router>
      </div>
    );
  }
}


export default connect(null, { fetchPatterns })(App);
