import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions/fetchPatterns'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import PatternsContainer from '../containers/PatternsContainer'

class PatternInput extends React.Component {

    state = {
        name: "",
        category: "",
        comment: "",
        loading: false
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value,
            category: event.target.value,
            // comment: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const pattern = {name: this.state.name}
        this.props.addPattern(pattern)
        this.setState({
            name: "",
            category: "",
            comment: "",
            loading: false
        })
    }

    render() {
        return (
            <div>
                <h2>Create New Pattern</h2>
                <Form onSubmit={this.handleSubmit}>
                    Name:
                    <input
                        as="textarea"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <br />
                    Category:
                    <input 
                        type="text"
                        value={this.state.category}
                        onChange={this.handleOnChange}
                    />
                    <br />
                    Comment:
                    <input  
                        type="text"
                        value={this.state.comment}
                        onChange={this.handleOnChange}
                    /><br />

                    <Button type="submit">Create Pattern</Button>
                </Form>
                {/* <PatternsContainer /> */}
            </div>
        )
    }
}




export default connect(null, { addPattern })(PatternInput)




