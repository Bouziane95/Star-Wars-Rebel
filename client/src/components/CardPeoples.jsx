import React, { Component } from 'react'


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
        <div className='card-container'>
        <h1>People ID</h1>
        <p>{name}</p>
        <p>{gender}</p>
        <p>{height} Cm</p>
        <p>{mass} Kg</p>
        </div>
        );
    }
    
}

export default CardPeoples;