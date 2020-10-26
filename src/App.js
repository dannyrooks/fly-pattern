import React from 'react';
import { connect } from 'react-redux'
import { fetchPatterns } from './actions/fetchPatterns'
import PatternsContainer from './containers/patternsContainer'
import PatternInput from './components/PatternInput'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchPatterns()
    
  }

  render(){
  const patterns = this.props.patterns.map((pattern, index) => <li key={index}>{pattern.name} </li>)
    return (
      <div className="App">
        <h1>
          Fly Pattern App
        </h1>
        <ul>
          {this.props.loading ? <h3>Loading.....</h3> : patterns}
        </ul>
      </div>
    );
  }
}


export default connect(mapStateToProps, { fetchPatterns })(App);
