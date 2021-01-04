import React from 'react'
// import PatternCard from './PatternCard'

const Pattern = props => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}


export default Pattern