import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Pattern from '../components/Pattern'


class Patterns extends React.Component {
    
    render() {

        const patterns = this.props.patterns.map(pattern => 
            <ul key={pattern.id}>
              <Link to={{pathname: `/patterns/${pattern.id}`}}>{pattern.name}</Link> | 
                {pattern.category} | {pattern.comment} | 
                 <Pattern {...pattern}/>
                {/* <button onClick={handleDelete}>Delete</button> */}
                </ul>)

        return (
            <div>
                <h1>Fly Patterns</h1>
                <h3>Select a pattern below to view its materials!</h3>
                <div>
                  {this.props.loading ? <h3>Loading.....</h3> : patterns }
                </div>
            </div>
        )
    }

   
}

const mapStateToProps = state => {
    return {
        patterns: state.PatternsReducer.patterns
    }
}

export default connect(mapStateToProps)(Patterns)