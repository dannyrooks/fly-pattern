import React from 'react'
import MaterialForm from '../components/MaterialForm'
// import { fetchPatterns } from '../actions/fetchPatterns'
import Pattern from '../components/Pattern'
import Material from '../components/Material'
 
const PatternCard = props => {    
        
        return(
            <div className="PatternCard">
                <br />
                <h2>Pattern Card</h2>
                <br />
                <Pattern />
                <Material />
                <ul></ul>
                  <MaterialForm patternId={id}/> 
            </div>
        )
}

export default PatternCard