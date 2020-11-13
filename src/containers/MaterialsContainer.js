import React from 'react'
import { connect } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
import Material from '../components/Material'

class MaterialsContainer extends React.Component{

    render() {
        return (
            <div>
                <MaterialForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        patterns: state.PatternReducer.patterns
    }
}


export default connect(mapStateToProps)(MaterialsContainer)
