import React from 'react'
import { connect } from 'react-redux'
import { fetchPatterns } from '../actions/fetchPatterns'

class PatternsContainer extends React.Component {

    render() {

        return (
            <div>
                
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