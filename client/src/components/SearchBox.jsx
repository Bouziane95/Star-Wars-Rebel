import  React from 'react'
import '../styles/search-box.css'


export const SearchBox = (props) => {
    return <div>
        <input className="search-box" type="search" placeholder= "Looking for ?" onChange={props.onSearchChange}/>
    </div>
}