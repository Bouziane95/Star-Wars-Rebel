import React, { Component } from 'react'
import {Card} from 'semantic-ui-react';
import DefaultImage from '../images/default.png'
import '../styles/images.css'

class CardPeoples extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            gender: "",
            height:"",
            mass:"",
          };
    }

    handleEvent = (event) => {
        if (event.target.checked){
            this.callApi(this.props.match.url + "?format=wookiee").then((res) => {
                this.setState({
                    name: res.whrascwo,
                    gender: res.acraahrc_oaooanoorc,
                    height: res.acwoahrracao,
                    mass: res.scracc,
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
                gender: res.gender,
                height: res.height,
                mass: res.mass,
            })
        })
        .catch((err) => {
            console.log(err);
        });
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
                  gender: res.gender,
                  height: res.height,
                  mass: res.mass,
              })
          })
          .catch((err) => {
            console.log(err);
          });
      }

      

    //No key/id or image provided by the API...
    render(){
        const {name, gender, height, mass} = this.state;

        return (
        <div>
        <input type="checkbox" names="translation" onChange={this.handleEvent}/>
        <label htmlFor="translation">Translate in Wookie</label>
        <Card>
        <h1>People ID</h1>
        <img className="default-img" src={DefaultImage} alt="Default" />
    <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
        <span>Gender : {gender}</span>
        </Card.Meta>
        <Card.Meta>
        <span>Height : {height} Cm</span>
        </Card.Meta>
        <Card.Meta>
        <span>Mass : {mass} Kg</span>
        </Card.Meta>
    </Card.Content>
        </Card>
        </div>
        );
    }
    
}

export default CardPeoples;