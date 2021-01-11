import React, { Component } from 'react'
import {Card} from 'semantic-ui-react';
import DefaultImage from '../images/default.png'
import '../styles/images.css'

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

    handleEvent = (event) => {
        if (event.target.checked){
            this.callApi(this.props.match.url + "?format=wookiee").then((res) => {
                this.setState({
                    name: res.whrascwo,
                    rotationPeriod: res.rcooaoraaoahoowh_akworcahoowa,
                    orbitalPeriod: res.oorcrhahaoraan_akworcahoowa,
                    diameter: res.waahrascwoaoworc,
                    climate:res.aoworcrcraahwh,
                    gravity: res.rrrcrahoahaoro,
                    terrain: res.oaanahscraaowo,
                    surfaceWater: res.churcwwraoawo_ohraaoworc,
                    population: res.akooakhuanraaoahoowh,
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
    }
    


    
    render() {
        const {name, rotationPeriod, orbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population} = this.state
        return (
            <div>
            <input type="checkbox" names="translation" onChange={this.handleEvent}/>
            <label htmlFor="translation">Translate in Wookie</label>
            <Card>
            <h1>Planets ID</h1>
            <img className="default-img" src={DefaultImage} alt="Default" />
    <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
        <span>Rotation Period : {rotationPeriod}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Orbital Period : {orbitalPeriod}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Diameter : {diameter} Km</span>
        </Card.Meta>
        <Card.Meta>
        <span>Climate : {climate}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Gravity : {gravity}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Terrain : {terrain}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Surface Water : {surfaceWater} Km</span>
        </Card.Meta>
        <Card.Meta>
        <span>Population : {population}</span>
        </Card.Meta>
    </Card.Content>
            </Card>                
            </div>
        )
    }
}
