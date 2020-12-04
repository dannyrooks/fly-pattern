import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { fetchMaterials } from '../actions/fetchMaterials'
// import { fetchPatterns } from '../actions/fetchPatterns'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'


class PatternCard extends React.Component {
    
    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
    }

    render() {
        return(
            <h2>Pattern Card with materials Here</h2>
        )
    }
}




export default connect()(PatternCard)