import React, { Component } from 'react'

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
                <h1>Movies ID</h1>
                <p>{title}</p>
                <p>{openingCrawl}</p>
                <p>{director}</p>
                <p>{producer}</p>
                <p>{releaseDate}</p>
            </div>
        )
    }
}
