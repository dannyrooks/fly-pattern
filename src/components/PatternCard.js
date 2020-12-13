import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { fetchMaterials } from '../actions/fetchMaterials'
import MaterialForm from '../components/MaterialForm'
// import Material from '../components/Material'
import { fetchPatterns } from '../actions/fetchPatterns'
// import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

class PatternCard extends React.Component {

    render() {
        // console.log(this.props)
        // const patternCard = this.props.patterns.map(pattern =>
        //     <p key={pattern.id}>

        //     </p>)
        return(
            <div>
                <h2>Pattern Card with materials Here</h2>
                <CardDeck>
                  <p>{`patterns/${this.props.match.params.id}/materials`}</p>
                  <MaterialForm />  
                </CardDeck>
                
            </div>
        )
    }
}

export default connect(null, { fetchPatterns })(PatternCard)