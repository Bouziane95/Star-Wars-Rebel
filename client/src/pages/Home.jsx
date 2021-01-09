import React from 'react'
import '../styles/home-page.css'
import EmpireLogo from "../images/empire.svg"

const Home = () => {
    
    return <div className='home-container'>
        <h1>Welcome to the DataBank of the Empire</h1>
        <img src={EmpireLogo} alt="Empire Logo"/>
    </div>
    
}

export default Home;