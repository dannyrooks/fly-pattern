import React from 'react'
import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'

const PatternCard = ({ pattern }) => {
    return (
        <div>

            <h3>{pattern.attributes.name}</h3>
            <p>{pattern.attributes.category}</p>
            <p>{pattern.attributes.comment}</p>
            <Link to={`/patterns/${pattern.id}/edit`}>Edit pattern</Link>
        </div> 
    )
}


export default PatternCard