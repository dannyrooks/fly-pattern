import React from 'react'
import { NavLink } from 'react-router-dom'



class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact >Home  |  </NavLink> 

                <NavLink to="/patterns" exact >Fly Patterns  |  </NavLink>
                
                <NavLink to="/patterns/new" exact >Add New Pattern  </NavLink>
            </div>
        )
    }
}


export default NavBar