import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions/fetchPatterns'
import { updatePatternForm } from '../actions/fetchPatterns'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import PatternsContainer from '../containers/PatternsContainer'

class PatternForm extends React.Component {
// const PatternForm = ({ formData, updatePatternForm, handleSubmit, editMode }) => {
    // const { name, category, comment } = formData
    state = {
            name: "",
            category: "",
            comment: "",
            loading: false
        }


    // const handleChange = event => {
    //     console.log("trigger handleChange")
    //     const { name, value } = event.target
    //     updatePatternForm(name, value)
    // }

    

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { name, category, comment } = this.state
        // this.props.addPattern(pattern)
        this.props.addPattern(this.state)
        this.setState({
            name: "",
            category: "",
            comment: "",
            // redirect: true
        })
    }

    render() {
        return (
            
                // <h2>Create New Pattern</h2>
                <Form onSubmit={this.handleSubmit}>
                    Name:
                    <input
                        placeholder="name"
                        name="name"
                        type="text"
                        value={this.name}
                        onChange={this.handleChange}
                    />
                    <br />
                    Category:
                    <input 
                        placeholder="category"
                        name="category"
                        value={this.category}
                        onChange={this.handleChange}
                    />
                    <br />
                    Comment:
                    <input  
                        placeholder="comment"
                        name="comment"
                        value={this.comment}
                        onChange={this.handleChange}
                    /><br />
                    <Button type="submit">Create Pattern</Button>
                </Form>
            
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addPattern: patternData => dispatch(addPattern(patternData))
})




export default connect(null, { mapDispatchToProps, addPattern, updatePatternForm })(PatternForm)