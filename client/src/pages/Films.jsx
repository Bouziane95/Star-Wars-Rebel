import React, { Component } from 'react'
import CardList from '../components/CardList';
import { SearchBox } from "../components/SearchBox";

export default class Films extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             films: [],
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
        this.callApi("films")
          .then((res) => {
              this.setState({ films: res.results });
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
        const { films, searchField } = this.state;
        const filteredFilms = films.filter((films) =>
        films.title.toLowerCase().includes(searchField.toLowerCase())
    );
        return (
            <div className= 'App'>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList history= {this.props} data={filteredFilms} />
            </div>
        )
    }
}
