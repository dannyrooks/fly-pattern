import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMaterials } from '../actions/fetchMaterials'
// import Card from 'react-bootstrap/Card'


const PatternCard = ({ patterns, id }) => {
    console.log(patterns)
    const pattern = patterns.find(pattern => pattern.id === id)
    return (
        // <div>
        //     <h3>{pattern.name}</h3>
        //     <p>{pattern.category}</p>
        //     <p>{pattern.comment}</p>
        //     {/* <Link to={`/patterns/${materials.id}/edit`}>Edit pattern</Link> */}
        // </div>
        <p>This pattern has no materials!</p>
    )
}


const mapStateToProps = state => {
    // debugger
    return {
        patterns: state.PatternReducer.patterns
    }
}


export default connect(mapStateToProps, { fetchMaterials })(PatternCard)