import React from 'react'
import { connect } from 'react-redux'
import { addMaterial } from '../actions/fetchPatterns'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// import { useParams } from 'react-router-dom'

class MaterialForm extends React.Component {
    
    state = {
        name: "",
        description: "",
        loading: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const patternId = this.props.patternId
        this.props.addMaterial(this.state, patternId) 
        this.setState({
            name: "",
            description: ""
        })
    }
    render() {
        // const patternName = this.props.pattern.map((pattern, i) => <li key={i}>{pattern.name}</li>)
        return(
            <Form onSubmit={this.handleSubmit}>
                <br />
                <h4>Add New Material</h4>
                Name:
                <input 
                    placeholder="name"
                    name="name"
                    type="text"
                    value={this.name}
                    onChange={this.handleChange}
                />
                <br />
                Description:
                <input 
                    placeholder="description"
                    name="description"
                    type="text"
                    value={this.description}
                    onChange={this.handleChange}
                />
                <br />
                <Button type="submit">Add Material</Button>
            </Form>
        )
    }

}

const mapStateToProps = state => {
    // console.log(state) 
    return {
        patterns: state.PatternsReducer.patterns
    }
}


export default connect(mapStateToProps, { addMaterial })(MaterialForm)