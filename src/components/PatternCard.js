import React from 'react'
import { connect } from 'react-redux'
import MaterialForm from '../components/MaterialForm'
import { fetchPatterns } from '../actions/fetchPatterns'
import Pattern from '../components/Pattern'
import Material from '../components/Material'
// import CardDeck from 'react-bootstrap/CardDeck'
 
class PatternCard extends React.Component {    

    render() { //render is a function
        
        const id = this.props.match.params.id
        // const patternName = this.props.pattern.map((pattern, i) => <li key={i}>{pattern.name}</li>)
        // debugger

        return(
            <div className="PatternCard">
                <br />
                <h2>Pattern Card</h2>
                <br />
                <Pattern patternId={id}/>
                <Material />
                <ul></ul>
                {/* <CardDeck> */}
                  <p>{`patterns/${id}/materials`}</p>

                  
                  <MaterialForm patternId={id}/>  {/* why does it break when patternId is removed?*/}
                {/* </CardDeck> */}

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