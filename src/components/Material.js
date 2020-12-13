import React from 'react'

function Material(patterns) {
    
    const pattern = patterns.filter(p => p.id === patterns.patterns.match.params.id)[0]

    const matList = pattern.materials.map((material, index) => <li key={index}>{material.description}</li>)

    const materialList = matList.length === 0 ? "No Materials" : matList

    return (
        <div>
            <h3>{pattern.name} Materials</h3>
            {materialList}
        </div>
    )
}

export default Material