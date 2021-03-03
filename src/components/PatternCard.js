import React from 'react'
import { connect } from 'react-redux'
import MaterialForm from '../components/MaterialForm'
import { fetchPatterns } from '../actions/fetchPatterns'
import Pattern from '../components/Pattern'
import Materials from '../components/Materials'
// import MaterialsContainer from '../containers/MaterialsContainer'

 
class PatternCard extends React.Component {    

    render() { //render is a function
        // debugger
        const id = this.props.match.params.id
        // const materials = this.props.match.params
        // console.log(materials)
        // const name = this.props.match.params
        // const patternName = this.props.pattern.map((pattern, i) => <li key={i}>{pattern.name}</li>)

        return(
            <div className="PatternCard">
                <br />
                <h2>Pattern Card</h2>
                <br />
                <Pattern patternId={id}  />
                <Materials patternId={id} />

                  
                <MaterialForm patternId={id}/> 

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        patterns: state.PatternsReducer.patterns
    }
}

export default connect(mapStateToProps, { fetchPatterns })(PatternCard)