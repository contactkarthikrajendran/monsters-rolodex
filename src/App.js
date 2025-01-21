import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Card from "./components/card/card.components";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("render");
  const [searchText, setSearchText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  const isMatch = (value) => {
    if (searchText === "") return true;
    else return value.name.toLowerCase().includes(searchText);
  };

  const onSearchChange = (event) => {
    const searchString = event.target.value;
    setSearchText(searchString);
    console.log(searchText);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    console.log("fetch monster");
  }, []);

  useEffect(() => {
    const getFilteredMap = monsters.filter((monster) => isMatch(monster));
    setFilteredMonster(getFilteredMap);
    console.log("filter monster");
  }, [monsters, searchText]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monster-SearchBox"
        placeholder="Search Monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonster}></CardList>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchText: "",
//     };

//     this.isMatch = (value) => {
//       if (this.state.searchText === "") return true;
//       else return value.name.toLowerCase().includes(this.state.searchText);
//     };

//     //console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//           //,
//           // () => {
//           //   console.log(this.state.monsters);
//           // }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchText = event.target.value;
//     this.setState(
//       () => {
//         return { searchText };
//       }
//       //,
//       // () => {
//       //   console.log("searchText : " + this.state.searchText);
//       // }
//     );
//   };

//   render() {
//     console.log("render");

//     const { monsters, searchText } = this.state;
//     const { onSearchChange } = this;

//     const filteredMap = monsters.filter((monster) => this.isMatch(monster));

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monster-SearchBox"
//           placeholder="Search Monsters"
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMap}></CardList>
//       </div>
//     );
//   }
// }

export default App;
