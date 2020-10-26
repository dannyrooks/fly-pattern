import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    color: 'white'
}

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact style={ linkStyle }>Home</NavLink>

                <NavLink to="/patterns" exact style={ linkStyle }>Add New Pattern</NavLink>
                
                <NavLink></NavLink>
            </div>
        )
    }
}


export default NavBar