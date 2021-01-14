import React from 'react'
import { connect } from 'react-redux'
import MaterialForm from '../components/MaterialForm'
import { fetchPatterns } from '../actions/fetchPatterns'
import Pattern from '../components/Pattern'
// import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
 
class PatternCard extends React.Component {    

    render() { //render is a function
        
        const id = this.props.match.params.id

        return(
            <div className="PatternCard">
                <br />
                <h2>Pattern Card</h2>
                <br />
                <Pattern />
                <ul></ul>
                {/* <CardDeck> */}
                  <p>{`patterns/${id}/materials`}</p>
                  
                  <MaterialForm patternId={id}/>  {/* why does it break when patternId is removed?*/}
                {/* </CardDeck> */}

                <Button onClick={this.handleClick}>Likes {this.state.likes}</Button>
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