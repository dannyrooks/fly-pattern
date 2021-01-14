import React from 'react'
import { connect } from 'react-redux'
// import PatternsContainer from '../containers/PatternsContainer'
// import PatternCard from '../components/PatternCard'

class Pattern extends React.Component {
    

    render() {
        // const pattern = this.props.patterns.map((pattern, i) => <li key={i}>(pattern.name)</li>)
        // console.log(name)

        // trying to reach in to find patterns name and display 
        // const filterPat = this.props.patterns.filter( pat => pat[0].id === this.props.patternId)
        // console.log(this.props.patterns)    
        // console.log(filterPat)  
        // console.log(this.props.patternId)
    

    return(
        <div className="Pattern">
            <h3>Pattern Name: {}</h3>
            <ul>{}</ul>
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

export default connect(mapStateToProps)(Pattern)