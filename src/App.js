import React from 'react';
import './App.css'
import { connect } from 'react-redux'
import { fetchPatterns } from './actions/fetchPatterns'
import { updatePatternForm } from './actions/fetchPatterns'
import PatternsContainer from './containers/PatternsContainer'
// import MaterialsContainer from './containers/MaterialsContainer'
import PatternCard from './components/PatternCard'
import PatternForm from './components/PatternForm'
// import MaterialForm from './components/MaterialForm'
import Material from './components/Material' 
// import Pattern from './components/Pattern'
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
          <Route path='/patterns' component={PatternsContainer} />
          <Route path='/patterns/new' component={PatternForm} />
          <Route path='/patterns/:id/materials' component={PatternCard} />
          <Route path='/materials' component={Material} />
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
