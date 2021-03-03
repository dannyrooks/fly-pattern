import React from 'react'
import { connect } from 'react-redux'
import { fetchPatterns } from '../actions/fetchPatterns'
import Patterns from '../components/Patterns'

class PatternsContainer extends React.Component {
 

    render() {
      if (this.props.patterns.length <= 0){
        this.props.fetchPatterns()
      }
      // const id = this.props.match.params.id

      
        return (
          <div>
          <Patterns patterns={this.props.patterns} />
          </div>
           
        )
    }
}



const mapStateToProps = state => {
    return {
      patterns: state.PatternsReducer.patterns,
      loading: state.PatternsReducer.loading
    }
  }

export default connect(mapStateToProps, { fetchPatterns })(PatternsContainer) 