import React from 'react'
// import { connect } from 'react-redux' 
import { NavLink } from 'react-router-dom'

// const linkStyle = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'teal',
//     color: 'white'
// }

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact activeClass>Home  |  </NavLink> 

                <NavLink to="/patterns" exact activeClass>Patterns  |  </NavLink>
                
                <NavLink to="/patterns/new" exact activeClass>Add New Pattern  </NavLink>
            </div>
        )
    }
}


export default NavBar