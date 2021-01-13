import React from 'react'
import { connect } from 'react-redux'
import MaterialForm from '../components/MaterialForm'
import { fetchPatterns } from '../actions/fetchPatterns'
import Pattern from '../components/Pattern'
// import CardDeck from 'react-bootstrap/CardDeck'
 
class PatternCard extends React.Component {

    render() {
        
        const id = this.props.match.params.id
        // console.log(this.props)
        // console.log(this.props.match.params.id)
        // const patternCard = this.props.patterns.map(pattern =>
        //     <li key={pattern.id}>
        //         {pattern.name}
                

            // </li>)
        return(
            <div className="PatternCard">
                <br />
                <h2>Pattern Card</h2>
                <br />
                <Pattern />
                <ul></ul>
                {/* <CardDeck> */}
                  <p>{`patterns/${id}/materials`}</p>
                  <MaterialForm patternId={id}/>  
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