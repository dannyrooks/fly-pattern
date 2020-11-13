import React from 'react';
import './App.css'
import { connect } from 'react-redux'
import { fetchPatterns } from './actions/fetchPatterns'
import { updatePatternForm } from './actions/fetchPatterns'
import PatternsContainer from './containers/PatternsContainer'
import Pattern from './components/Pattern'
// import Patterns from './components/Patterns'
import PatternForm from './components/PatternForm'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'
// import FigureImage from 'react-bootstrap/FigureImage'
// import FigureCaption from 'react-bootstrap/FigureCaption';


class App extends React.Component {

  componentDidMount() {
    this.props.fetchPatterns()
    
  }

  render(){
    return (
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/patterns' component={PatternsContainer} />
          <Route exact path='/patterns/new' component={PatternForm} />
          <Route exact path='/patterns/pattern_id/materials/id' component={Pattern} />
          {/* <Route exact path='/patterns/:id/materials' component={PatternsContainer} /> */}
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPatterns: () => dispatch( fetchPatterns() ),
  updatePatternForm: () => dispatch( updatePatternForm() )
});

export default connect(null, mapDispatchToProps)(App);
