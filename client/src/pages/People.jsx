import React, { Component } from 'react'
import CardList from '../components/CardList';
import { SearchBox } from "../components/SearchBox";

export default class People extends Component {
    constructor() {
    super();

    this.state = {
      peoples: [],
      searchField: "",
    };
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
    this.callApi("people")
      .then((res) => {
        this.setState({ peoples: res.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { peoples, searchField } = this.state;
    const filteredPeople = peoples.filter((ppl) =>
      ppl.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList peoples={filteredPeople} />
      </div>
    );
  }
}
