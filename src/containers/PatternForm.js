import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions/fetchPatterns'

class PatternForm extends Component {
    
    state = {
        pattern: {
            name: "",
            description: ""
        },
        loading: false
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, { addPattern })(patternForm)
