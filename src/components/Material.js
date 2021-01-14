import React from 'react'
// import PatternsContainer from './container/PatternsContainer'

const Material = props => {
    // const name = props.name
    return (
        <div>
            <ul>{props.name}</ul>
            <li>{props.description}</li>
        </div>
    )
}

export default Material
