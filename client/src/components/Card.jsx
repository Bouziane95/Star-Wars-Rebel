import React from 'react';

export const Card = (props) => {
    return <div className='card-container'>
        {/* <img src="" alt="people"/> */}
        <h2>{props.people.name}</h2>
    </div>
}