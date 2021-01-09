import React, { Component } from 'react'
import {Card} from 'semantic-ui-react';
import DefaultImage from '../images/default.png'
import '../styles/images.css'

export default class CardSpaceships extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             model: "",
             manufacturer: "",
             costCredits: "",
             length:"",
             maxSpeed: "",
             crew: "",
             passengers: "",
             cargoCapacity: "",
             consumables: "",
             hyperdrive: "",
             MGLT : "",
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
                model: res.model,
                manufacturer: res.manufacturer,
                length: res.length,
                costCredits: res.cost_in_credits,
                maxSpeed: res.max_atmosphering_speed,
                crew: res.crew,
                passengers: res.passengers,
                cargoCapacity: res.cargo_capacity,
                consumables : res.consumables,
                hyperdrive : res.hyperdrive_rating,
                MGLT : res.MGLT,
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render() {
        const {name, model, manufacturer,length, costCredits, maxSpeed, crew, passengers, cargoCapacity,consumables, hyperdrive, MGLT} = this.state;
        return (
            <div>
            <Card>
        <h1>Starships ID</h1>
        <img className="default-img" src={DefaultImage} alt="Default" />
    <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
        <span>Model : {model}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Manufacturer : {manufacturer}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Length : {length}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Credits : {costCredits}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Max speed : {maxSpeed}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Crew : {crew}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Passengers : {passengers}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Cargo Capacity : {cargoCapacity}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Consumables : {consumables}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Hyperdrive : {hyperdrive}</span>
        </Card.Meta>
        <Card.Meta>
        <span>MGLT : {MGLT}</span>
        </Card.Meta>
    </Card.Content>
        </Card>
            </div>
        )
    }
}
