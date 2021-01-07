import React from 'react';
import {Card} from './Card'
import '../styles/card-list.css'
import {Link} from 'react-router-dom'

const CardList = ({data, history}) => {

    return <div className="card-list">
    
        {
        data.map(datas =>(
            datas.name ? <Link key={datas.url[datas.url.length - 2]} to={history.location.pathname + '/' + datas.url[datas.url.length - 2]}>{datas.name}</Link> 
            : <Link key={datas.url[datas.url.length - 2]} to={history.location.pathname + '/' + datas.url[datas.url.length - 2]}>{datas.title}</Link>
        ))}
    </div>
}

export default CardList;
