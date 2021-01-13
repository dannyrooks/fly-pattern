import React from 'react'
import { connect } from 'react-redux'
import { fetchPatterns } from '../actions/fetchPatterns'
import { Link } from 'react-router-dom'

class PatternsContainer extends React.Component {

    render() {
        const patterns = this.props.patterns.map(pattern => 
        <p key={pattern.id}>
          <Link to={{pathname: `/patterns/${pattern.id}`}}>{pattern.name}</Link> | 
            {pattern.category} | {pattern.comment}
            {/* <button onClick={handleDelete}>Delete</button> */}
            </p>)

        return (
            <div>
                <h1>Fly Patterns</h1>
                <h3>Select a pattern below to view its materials!</h3>
                <div>
                  {this.props.loading ? <h3>Loading.....</h3> : patterns }
                   {/* <Pattern patterns={this.props.materials}/>  */}
                </div>
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