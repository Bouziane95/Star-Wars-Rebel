import React, { Component } from 'react'
import '../styles/nav-bar.css'
import { NavLink } from "react-router-dom";

export default class NavigationBar extends Component {
    
    render() {
        return (
            <nav className="navigation">
                <ul className='container'>
                <NavLink className="nav-link" exact to='/'>Home</NavLink>
                <NavLink className="nav-link" exact to='/people'>People</NavLink>
                <NavLink className="nav-link" exact to='/planets'>Planets</NavLink>
                <NavLink className="nav-link" exact to='/starships'>Starships</NavLink>
                <NavLink className="nav-link" exact to='/vehicles'>Vehicles</NavLink>
                <NavLink className="nav-link" exact to='/films'>Films</NavLink>
                <NavLink className="nav-link" exact to='/species'>Species</NavLink>
                </ul> 
            </nav>
        )
    }
}
