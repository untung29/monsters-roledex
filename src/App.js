import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component.jsx";
import { SearchBox } from "./component/search-box/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchTextField: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  handleChange(e) {
    this.setState({ searchTextField: e.target.value });
  }

  render() {
    const { monsters, searchTextField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchTextField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchBox
          placeholder="search for monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
