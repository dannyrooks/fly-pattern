import React from 'react'
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom'

// import {fetchMaterials} from '../actions/fetchMaterials'
// import PatternsContainer from '../container/PatternsContainer'

class Materials extends React.Component  {
//    debugger
   render(){
    //    debugger
           const filterMat = this.props.patterns.filter(material => material.id == this.props.patternId)
// console.log(filterMat[0].materials)
    const patMats = filterMat[0].materials.map((mat, id) => 
        <p key={id}>{mat.name} | {mat.description}</p>)
        
    return (
        
        <div className="Materials">
            <ul> 
                {/* {!filterMat[0] ? null : filterMat[0]} */}
            { this.props.loading ? <h3>Loading.....</h3> : patMats }
            </ul>

        </div>
    )
   }
}

const mapStateToProps = state => {
    return {  
        patterns: state.PatternsReducer.patterns,
        materials: state.MaterialsReducer
    }
}


export default connect(mapStateToProps)(Materials)