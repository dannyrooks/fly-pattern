import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMaterials } from '../actions/fetchMaterials'
import PatternCard from '../components/PatternCard'
// import Card from 'react-bootstrap/Card'


// maybe change this function to a class method? need to fix
const PatternCard = ({ patterns }) => {
    return (
        patterns ?
        <div>
                {/* add .find method here */} 
            <h3>{patterns.name}</h3>
            <p>{patterns.category}</p>
            <p>{patterns.comment}</p>
            <Link to={`/patterns/${patterns.id}/edit`}>Edit pattern</Link>
        </div> :
        <p>This pattern has no materials!</p>
    )
}


const mapStateToProps = state => {
    return {
        patterns: state.MaterialReducer.materials
    }
}


export default connect(mapStateToProps, { fetchMaterials })(PatternCard)