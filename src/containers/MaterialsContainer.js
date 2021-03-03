import React from 'react'
import { connect } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
import Materials from '../components/Materials'
import {fetchMaterials} from '../actions/fetchMaterials'
// import MaterialForm from '../components/MaterialForm'

class MaterialsContainer extends React.Component{
    componentDidMount() {
        this.props.fetchMaterials()
    }

    render() {
        console.log(this.props)

        // const patMat = this.props.patterns.map((material, i) => <p key={i}>{material.name}
        // </p>)

        return (
        
            <div>
                <ul>
                    <Materials materials={this.props.materials} />
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        patterns: state.PatternReducer.patterns,
        materials: state.PatternReducer,
        loading: state.PatternReducer.loading
    }

} 


export default connect(mapStateToProps, { fetchMaterials })(MaterialsContainer)
