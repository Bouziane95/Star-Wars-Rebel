import React, { Component } from 'react'
import {Card} from 'semantic-ui-react';
import DefaultImage from '../images/default.png'
import '../styles/images.css'

export default class CardMovies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:"",
            openingCrawl:"",
            director: "",
            producer: "",
            releaseDate: "",
        }
    }

    callApi = async (endpoint) => {
        const response = await fetch("https://swapi.dev/api" + endpoint);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    componentDidMount() {
        this.callApi(this.props.match.url)
        .then((res) => {
            console.log(res)
            this.setState({
                title: res.title,
                openingCrawl: res.opening_crawl,
                director: res.director,
                producer: res.producer,
                releaseDate: res.release_date
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render() {
        const {title, openingCrawl, director, producer, releaseDate} = this.state
        return (
            <div>
            <Card>
            <h1>Movies ID</h1>
            <img className="default-img" src={DefaultImage} alt="Default" />
    <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
        <span>Description : {openingCrawl}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Director : {director}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Producer : {producer}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Release Date : {releaseDate}</span>
        </Card.Meta>
    </Card.Content>
            </Card>
            </div>
        )
    }
}
