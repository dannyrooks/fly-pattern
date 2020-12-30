import React from 'react'
import { connect } from 'react-redux'
import MaterialForm from '../components/MaterialForm'
import { fetchPatterns } from '../actions/fetchPatterns'
import CardDeck from 'react-bootstrap/CardDeck'
 
class PatternCard extends React.Component {

    render() {
        const obj = this.props.patterns[0]
        console.log(obj) // need to destructure?
        const patternCard = this.props.patterns.map(pattern =>
            <li key={pattern.id}>
                {pattern.name}

            </li>)
        return(
            <div>
                <h2>pattern card name with materials Here</h2>
                <ul>{patternCard}</ul>
                <CardDeck>
                  <p>{`patterns/${this.props.match.params.id}/materials`}</p>
                  <MaterialForm />  
                </CardDeck>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        patterns: state.PatternsReducer.patterns
    }
}

export default connect(mapStateToProps, { fetchPatterns })(PatternCard)