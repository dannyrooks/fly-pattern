import React from 'react'
import { connect } from 'react-redux'
import { fetchPatterns } from '../actions/fetchPatterns'
import { Link } from 'react-router-dom'
// import PatternForm from '../components/PatternForm'
import '../App.css';
// import { Switch, Route } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Pattern from '../components/Pattern'
// import PatternCard from '../components/pattern/PatternCard';


class PatternsContainer extends React.Component {
  
    // handleDelete = () => {
    
    // }

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
  // console.log(state.PatternsReducer.patterns)
  // debugger
    return {
      patterns: state.PatternsReducer.patterns,
      // materials: state.MaterialsReducer.materials,
      loading: state.PatternsReducer.loading
    }
  }

export default connect(mapStateToProps, { fetchPatterns })(PatternsContainer)