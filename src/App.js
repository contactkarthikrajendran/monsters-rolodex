import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{

 
 

  constructor(){
    super();
    this.state = {
      monsters:[],  
      searchText:'',  
    };

    this.isMatch = (value) => {  
      if(this.state.searchText === '') return true;
      else return value.name.toLowerCase().includes(this.state.searchText);    
    };
    
    console.log('constructor');
  }
  

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> this.setState(
        ()=>{          
         return {monsters: users}
        },
        ()=>{
          console.log(this.state.monsters);
        }
      ));
  }


  render(){
    console.log('render');
    return (
           <div className="App">    
           <input className ='SearchBox' type='search' placeholder='Search Monsters' onChange={(event)=>{
            this.setState(
              ()=>{
                return {searchText:event.target.value}
              },
              ()=>{
                console.log('searchText : '+this.state.searchText);
              }
            )
           }}/>
            {this.state.monsters.filter((monster)=>this.isMatch(monster)).map((monster)=>{              
             return (             
              <div key ={monster.id}>              
                <h1>{monster.name}</h1>             
             </div> );          
            })    
          }
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
