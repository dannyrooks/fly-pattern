import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { fetchMaterials } from '../actions/materialActions'
import MaterialForm from '../components/MaterialForm'
// import Material from '../components/Material'
import { fetchPatterns } from '../actions/fetchPatterns'
// import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
// import patternsReducer from '../reducers/PatternsReducer'

class PatternCard extends React.Component {

    render() {
        // const id = this.props.match.params
        console.log(this.props.patterns[0]) // need to destructure?
        const patternCard = this.props.patterns.map(pattern =>
            <p key={pattern.id}>
                {pattern.name}

            </p>)
        return(
            <div>
                <h2>pattern card name with materials Here</h2>
                <CardDeck>
                  <p>{`patterns/${this.props.match.params.id}/materials`}</p>
                  <MaterialForm />  
                </CardDeck>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        patterns: state.PatternsReducer.patterns
    }
}

export default connect(mapStateToProps, { fetchPatterns })(PatternCard)