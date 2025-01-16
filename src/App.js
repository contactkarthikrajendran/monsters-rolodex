import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };

    this.isMatch = (value) => {
      if (this.state.searchText === "") return true;
      else return value.name.toLowerCase().includes(this.state.searchText);
    };

    //console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          //,
          // () => {
          //   console.log(this.state.monsters);
          // }
        )
      );
  }

  onSearchChange = (event) => {
    const searchText = event.target.value;
    this.setState(
      () => {
        return { searchText };
      }
      //,
      // () => {
      //   console.log("searchText : " + this.state.searchText);
      // }
    );
  };

  render() {
    console.log("render");

    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;

    const filteredMap = monsters.filter((monster) => this.isMatch(monster));

    return (
      <div className="App">
        <SearchBox
          className="monster-SearchBox"
          placeholder="Search Monsters"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMap}></CardList>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
