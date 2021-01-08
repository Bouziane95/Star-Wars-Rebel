import React, { Component } from 'react'

export default class CardVehicles extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             model:"",
             manufacturer: "",
             costCredits: "",
             maxSpeed: "",
             crew: "",
             passengers: "",
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
                costCredits: res.cost_in_credits,
                maxSpeed: res.max_atmosphering_speed,
                crew: res.crew,
                passengers: res.passengers
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }


    
    render() {
        const {name, model, manufacturer, costCredits, maxSpeed, crew, passengers} = this.state;
        return (
            <div>
                <h1>Vehicles</h1>
                <p>{name}</p>
                <p>{model}</p>
                <p>{manufacturer}</p>
                <p>{costCredits}</p>
                <p>{maxSpeed}</p>
                <p>{crew}</p>
                <p>{passengers}</p>
            </div>
        )
    }
}
