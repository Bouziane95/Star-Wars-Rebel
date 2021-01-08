import React, { Component } from 'react'

export default class CardPlanets extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            rotationPeriod: "",
            orbitalPeriod: "",
            diameter: "",
            climate:"",
            gravity: "",
            terrain: "",
            surfaceWater: "",
            population: "",
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
                rotationPeriod: res.rotation_period,
                orbitalPeriod: res.orbital_period,
                diameter: res.diameter,
                climate:res.climate,
                gravity: res.gravity,
                terrain: res.terrain,
                surfaceWater: res.surface_water,
                population: res.population,
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
    


    
    render() {
        const {name, rotationPeriod, orbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population} = this.state
        return (
            <div>
                <h1>Planets ID</h1>
                <p>{name}</p>
                <p>{rotationPeriod}</p>
                <p>{orbitalPeriod}</p>
                <p>{diameter}</p>
                <p>{climate}</p>
                <p>{gravity}</p>
                <p>{terrain}</p>
                <p>{surfaceWater}</p>
                <p>{population}</p>                
            </div>
        )
    }
}
