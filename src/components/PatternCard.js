import React from 'react'
import { connect } from 'react-redux'
import MaterialForm from '../components/MaterialForm'
import { fetchPatterns } from '../actions/fetchPatterns'
import Pattern from '../components/Pattern'
import CardDeck from 'react-bootstrap/CardDeck'
 
class PatternCard extends React.Component {

    render() {
        
        const id = this.props.match.params.id
        // console.log(this.props.match.params.id)
        const patternCard = this.props.patterns.map(pattern =>
            <li key={pattern.id}>
                {pattern.name}
                

            </li>)
        return(
            <div>
                <h2>pattern card name with materials Here</h2>
                <Pattern />
                <ul>{patternCard}</ul>
                <CardDeck>
                  <p>{`patterns/${id}/materials`}</p>
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