import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./Data.json";
import TestComponent from "./TestComponent";

type USERS = typeof Data;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="Hello from App" />
      </header>
    </div>
  );
};

export default App;
