import  React from 'react'
import '../styles/search-box.css'

export const SearchBox = (props) => {
    return <input className="search-box" type="search" placeholder="search peoples" onChange={props.onSearchChange}/>
}