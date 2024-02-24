import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PieGraph } from './components/PieChart';


function App() {
  return (
    <PieGraph />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <div>
    //     <h1>
    //       Chart.js Pie Chart
    //     </h1>
    //     <PieGraph />
    //   </div>
    // </div>
  );
}

export default App;
