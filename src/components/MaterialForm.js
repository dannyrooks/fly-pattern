import React from 'react'
import { connect } from 'react-redux'
import { addMaterial } from '../actions/fetchMaterials'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class MaterialForm extends React.Component {
    
    state = {
        name: "",
        description: "",
        pattern_id: "",
        loading: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addMaterial(this.state, this.props.id)
        this.setState({
            name: "",
            description: ""
        })
    }
    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <br />
                <h2>Add New Material</h2>
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


export default connect(null, { addMaterial })(MaterialForm)