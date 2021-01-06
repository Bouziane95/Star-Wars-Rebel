import React from 'react';
import {Card} from './Card'
import '../styles/card-list.css'

const CardList = (props) => {
    return <div className="card-list">
        {props.peoples.map(people =>(
            <Card people={people}/>
        ))}
    </div>
}

export default CardList;
