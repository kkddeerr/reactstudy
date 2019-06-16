import React, { Component } from 'react';
import '../css/App.css';
import TodoBody from './todoListBody';
import TodoHeader from './todoListHeader';
import TodoList from './todoListList';

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

class App extends Component {
  render() {
    return (
      <div className = "Contents">
        <div className = "TodoHeader"><TodoHeader /></div>
        <div className = "TodoBody"><TodoBody /></div>
        <div className = "TodoList"><TodoList /></div>
      </div>
    )
  }
}

export default App;
