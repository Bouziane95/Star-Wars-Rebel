import React, { Component } from 'react'
import {Card} from 'semantic-ui-react';
import DefaultImage from '../images/default.png'
import '../styles/images.css'

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
            <Card>
        <h1>Species ID</h1>
        <img className="default-img" src={DefaultImage} alt="Default" />
    <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
        <span>Classification : {classification}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Designation : {designation}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Average Lifespan : {averageLifespan} Years</span>
        </Card.Meta>
        <Card.Meta>
        <span>Average Height : {averageHeight} Kg</span>
        </Card.Meta>
        <Card.Meta>
        <span>Skin colors : {skinColors}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Hair colors : {hairColors}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Eye colors : {eyeColors}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Language : {language}</span>
        </Card.Meta>
    </Card.Content>
        </Card>
            </div>
        )
    }
}
