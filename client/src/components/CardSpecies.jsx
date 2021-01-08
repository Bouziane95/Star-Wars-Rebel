import React, { Component } from 'react'

export default class CardSpecies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             classification: "",
             designation: "",
             averageHeight : "",
             skinColors: "",
             hairColors: "",
             eyeColors: "",
             averageLifespan: "",
             language: "",
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
                name: res.name,
                classification: res.classification,
                designation: res.designation,
                averageHeight: res.average_height,
                skinColors : res.skin_colors,
                hairColors : res.hair_colors,
                eyeColors : res.eye_colors,
                averageLifespan : res.average_lifespan,
                language : res.language,
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render() {
        const {name, classification, designation, averageLifespan, averageHeight, skinColors, hairColors, eyeColors,language} = this.state;

        return (
            <div>
                <h1>Species ID</h1>
                <p>{name}</p>
                <p>{classification}</p>
                <p>{designation}</p>
                <p>{averageLifespan}</p>
                <p>{averageHeight}</p>
                <p>{skinColors}</p>
                <p>{hairColors}</p>
                <p>{eyeColors}</p>
                <p>{language}</p>
            </div>
        )
    }
}
