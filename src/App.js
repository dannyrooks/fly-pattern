import React from 'react';
import './App.css'
import { connect } from 'react-redux'
import { fetchPatterns } from './actions/fetchPatterns'
import PatternsContainer from './containers/PatternsContainer'
import MaterialsContainer from './containers/MaterialsContainer'
import PatternCard from './components/PatternCard'
import PatternForm from './components/PatternForm'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchPatterns()
    
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/patterns/new' component={PatternForm} />
          <Route exact path='/patterns/:id' component={PatternCard} />
          <Route exact path='/patterns' component={PatternsContainer} /> 
          <Route exact path='patterns/:id/materials' component={MaterialsContainer} /> 
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     patterns: state.PatternsReducer.patterns,
//     loading: state.PatternsReducer.loading
//   }
// }

const mapDispatchToProps = dispatch => ({
  fetchPatterns: () => dispatch( fetchPatterns() ),
});

export default connect(null, mapDispatchToProps)(App);
