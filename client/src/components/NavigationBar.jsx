import React, { Component } from 'react'
import '../styles/nav-bar.css'
import { NavLink } from "react-router-dom";

export default class NavigationBar extends Component {
    
    render() {
        return (
            <nav>
                <ul className='container'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/people'>People</NavLink>
                <NavLink exact to='/planets'>Planets</NavLink>
                <NavLink exact to='/spaceships'>Spaceships</NavLink>
                <NavLink exact to='/vehicles'>Vehicles</NavLink>
                <NavLink exact to='/films'>Films</NavLink>
                <NavLink exact to='/species'>Species</NavLink>
                </ul> 
            </nav>
        )
    }
}
