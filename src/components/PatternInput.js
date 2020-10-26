import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions/fetchPatterns'
import PatternsContainer from '../containers/PatternsContainer'

class PatternInput extends React.Component {

    state = {
        name: "",
        loading: false
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addPattern(this.state)
        this.setState({
            name: ""
        })
    }

    render() {
        return (
            <div>
                <h2>Create New Pattern</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <button type="submit">Add Pattern</button>
                </form>
                <PatternsContainer />
            </div>
        )
    }
}


export default connect(null, { addPattern })(PatternInput)




