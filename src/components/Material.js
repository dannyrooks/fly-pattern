import React from 'react'

function Material(patterns) {
    
    let pattern = patterns.patterns.patterns.filter(material => material.id === patterns.patterns.match.params.id)[0]
    debugger
    const matList = pattern.materials.map((material, index) => <li key={index}>{material.description}</li>)

    const patternMaterialList = matList.length === 0 ? "No Materials" : matList

    return (
        <div>
            <h3>{pattern.name} Materials</h3>
            {patternMaterialList}
        </div>
    )
}

export default Material