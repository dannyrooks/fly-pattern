import React from 'react'
import { connect } from 'react-redux'
import { fetchPatterns } from '../actions/fetchPatterns'
// import PatternForm from '../components/PatternForm'
import '../App.css';
// import { Switch, Route } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Pattern from '../components/Pattern'
// import PatternCard from '../components/pattern/PatternCard';


class PatternsContainer extends React.Component {

    render() {
        const patterns = this.props.patterns.map((pattern, index) => 
        <p key={index}>
          {pattern.name} |
            <strong> {pattern.category} | {pattern.comment} </strong>
            </p>)

        return (
            <div>
                <h1>
                  Fly Patterns
                </h1>
                {/* <PatternCard /> */}
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
      patterns: state.PatternReducer.patterns,
      loading: state.PatternReducer.loading
    }
  }

export default connect(mapStateToProps, { fetchPatterns })(PatternsContainer)