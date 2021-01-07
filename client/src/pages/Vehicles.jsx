import React, { Component } from 'react'
import CardList from '../components/CardList';
import { SearchBox } from "../components/SearchBox";

export default class Vehicles extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             vehicles: [],
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
        this.callApi("vehicles")
          .then((res) => {
              this.setState({ vehicles: res.results });
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
        const { vehicles, searchField } = this.state;
        const filteredVehicles = vehicles.filter((vhcles) =>
        vhcles.name.toLowerCase().includes(searchField.toLowerCase())
    );

        return (
            <div className="App">
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList history= {this.props} data={filteredVehicles} />
            </div>
        )
    }
}


