import React from 'react'
import { NavLink } from 'react-router-dom'



class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact activeClass>Home  |  </NavLink> 

                <NavLink to="/patterns" exact activeClass>Fly Patterns  |  </NavLink>
                
                <NavLink to="/patterns/new" exact activeClass>Add New Pattern  </NavLink>
            </div>
        )
    }
}


export default NavBar