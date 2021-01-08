import React, { Component } from 'react'

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
                <h1>Spaceships ID</h1>
                <p>{name}</p>
                <p>{model}</p>
                <p>{manufacturer}</p>
                <p>{length}</p>
                <p>{costCredits}</p>
                <p>{maxSpeed}</p>
                <p>{crew}</p>
                <p>{passengers}</p>
                <p>{cargoCapacity}</p>
                <p>{consumables}</p>
                <p>{hyperdrive}</p>
                <p>{MGLT}</p>
            </div>
        )
    }
}
