import React, { Component } from 'react'
import {Card} from 'semantic-ui-react';
import DefaultImage from '../images/default.png'
import '../styles/images.css'

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

    handleEvent = (event) => {
        if (event.target.checked){
            this.callApi(this.props.match.url + "?format=wookiee").then((res) => {
                this.setState({
                    name: res.whrascwo,
                    model: res.scrawhhuwwraoaaohurcworc,
                    manufacturer: res.howoacahoaanwo_oaanracc,
                    costCredits: res.oaoocao_ahwh_oarcwowaahaoc,
                    maxSpeed: res.akraccwowhrrworcc,
                    crew: res.oarcwooh,
                    passengers: res.akraccwowhrrworcc
                })
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            this.callApi(this.props.match.url)
            .then((res) => {
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
    }


    
    render() {
        const {name, model, manufacturer, costCredits, maxSpeed, crew, passengers} = this.state;
        return (
            <div>
            <input type="checkbox" names="translation" onChange={this.handleEvent}/>
            <label htmlFor="translation">Translate in Wookie</label>
            <Card>
        <h1>Vehicles ID</h1>
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
    </Card.Content>
        </Card>
            </div>
        )
    }
}
