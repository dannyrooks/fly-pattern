import React from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions/fetchPatterns'
// import { updatePatternForm } from '../actions/fetchPatterns'
import { Redirect } from 'react-router-dom'
import '../App.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PatternForm extends React.Component {

    state = {
            name: "",
            category: "",
            comment: "",
            loading: false
        }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        // const { name, category, comment } = this.state
        // this.props.addPattern(pattern)
        this.props.addPattern(this.state)
        this.setState({
            name: "",
            category: "",
            comment: "",
            redirect: true
        })
    }

    patternRedirect = () => {
        if (this.state.redirect) {
            return(
                <Redirect to={{pathname: '/patterns', state: {successMessage: "Pattern Created!"}}} />
            )
        }
    }

    render() {
        return (
                <Form onSubmit={this.handleSubmit}>
                <br />
                 <h2>Create New Pattern</h2>
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
                    <Button type="submit" >Create Pattern</Button>
                    {this.patternRedirect()}
                </Form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addPattern: patternData => dispatch(addPattern(patternData))
})


export default connect(null, { mapDispatchToProps, addPattern })(PatternForm)