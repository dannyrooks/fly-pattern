import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions/fetchPatterns'
import { updatePatternForm } from '../actions/fetchPatterns'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import PatternsContainer from '../containers/PatternsContainer'

class PatternForm extends React.Component {

    state = {
        name: "",
        category: "",
        comment: "",
        loading: false
    }

    handleChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        updatePatternForm(name, value)
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
                        placeholder="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <br />
                    Category:
                    <input 
                        placeholder="category"
                        name="category"
                        type="text"
                        value={this.state.category}
                        onChange={this.handleChange}
                    />
                    <br />
                    Comment:
                    <input  
                        placeholder="comment"
                        name="comment"
                        type="text"
                        value={this.state.comment}
                        onChange={this.handleChange}
                    /><br />

                    <Button type="submit">Create Pattern</Button>
                </Form>
                {/* <PatternsContainer /> */}
            </div>
        )
    }
}




export default connect(null, { addPattern, updatePatternForm })(PatternForm)