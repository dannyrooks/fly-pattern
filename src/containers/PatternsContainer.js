import React from 'react'
import { connect } from 'react-redux'
import { fetchPatterns } from '../actions/fetchPatterns'
import PatternForm from '../components/PatternForm'
import '../App.css';
// import { Switch, Route } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Pattern from '../components/Pattern'
// import BeachCard from '../components/beach/BeachCard';


class PatternsContainer extends React.Component {

    render() {
        const patterns = this.props.patterns.map((pattern, index) => 
        <li key={index}>{pattern.name} | {pattern.category} | {pattern.comment} </li>)

        return (
            <div>
                <h1>
                  Fly Patterns
                </h1>
                <PatternForm />
                <br />
                <div>
                  {this.props.loading ? <h3>Loading.....</h3> : patterns }
                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      patterns: state.patternReducer.patterns,
      loading: state.patternReducer.loading
    }
  }

export default connect(mapStateToProps, { fetchPatterns })(PatternsContainer)