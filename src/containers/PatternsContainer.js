import React from 'react'
import { connect } from 'react-redux'
import { fetchPatterns } from '../actions/fetchPatterns'
import PatternInput from '../components/PatternInput'
// import Pattern from '../components/Pattern'

class PatternsContainer extends React.Component {

    render() {
        const patterns = this.props.patterns.map((pattern, index) => <li key={index}>{pattern.name} </li>)

        return (
            <div>
                <h1>
                  Fly Patterns
                </h1>
                <PatternInput />
                <ul>
                  {this.props.loading ? <h3>Loading.....</h3> : patterns }
                  
                </ul>
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