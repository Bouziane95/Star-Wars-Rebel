import React, { Component } from 'react'
import CardList from '../components/CardList';
import { SearchBox } from "../components/SearchBox";

export default class Planets extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             planets: [],
             searchField: "",
        }
    }

    callApi = async (endpoint) => {
        const response = await fetch("https://swapi.dev/api/" + endpoint);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
      };

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
      };

    componentDidMount() {
        this.callApi("planets")
          .then((res) => {
              this.setState({ planets: res.results });
          })
          .catch((err) => {
            console.log(err);
          });
      }

    componentWillUnmount(){
        //To avoid memory leaks ! It return null when escaping the component
        this.setState = () =>{
          return;
        }
      }
    
    render() {
        const { planets, searchField } = this.state;
        const filteredPlanets = planets.filter((plnt) =>
        plnt.name.toLowerCase().includes(searchField.toLowerCase())
    );
        return (
            <div>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList history= {this.props} data={filteredPlanets} />
            </div>
        )
    }
}