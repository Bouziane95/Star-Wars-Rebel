import React from 'react';
import '../styles/card-list.css'
import {Link} from 'react-router-dom'

const CardList = ({data, history}) => {
   
   return <div className="card-list">
    
        {
        data.map((datas, index) =>(
            datas.name ? <Link key={index} to={datas.url.substring(20)}>{datas.name}</Link> 
            : <Link key={datas.url[datas.url.length - 2]} to={history.location.pathname + '/' + datas.url[datas.url.length - 2]}>{datas.title}</Link>
        ))}
    </div>
}

export default CardList;
