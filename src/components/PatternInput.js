import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions/fetchPatterns'
// import PatternsContainer from '../containers/PatternsContainer'

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
        const pattern = {name: this.state.name}
        this.props.addPattern(pattern)
        this.setState({
            name: "",
            loading: false
        })
    }

    render() {
        return (
            <div>
                <h2>Create New Pattern</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <input type="submit" />
                </form>
                {/* <PatternsContainer /> */}
            </div>
        )
    }
}


export default connect(null, { addPattern })(PatternInput)




