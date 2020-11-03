import React from 'react'
// import { connect } from 'react-redux' 
import { NavLink } from 'react-router-dom'

const linkStyle = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'teal',
    color: 'white'
}

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact style={ linkStyle }>Home</NavLink>

                <NavLink to="/patterns" exact style={ linkStyle }>Patterns</NavLink>
                
                <NavLink to="/patterns/new" exact style={ linkStyle }>Add New Pattern</NavLink>
            </div>
        )
    }
}


export default NavBar