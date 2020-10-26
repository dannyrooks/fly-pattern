import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions/fetchPatterns'

class AddPattern extends Component {
    state = {
        pattern: {
            name: "",
            category: "",
            comment: ""
        },
        loading: false
    }

    handleChange = (event) => {

    }

    handleSubmit = (event) => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                </form>
            </div>
        )
    }
}

export default connect(null, { addPattern })(AddPattern)
