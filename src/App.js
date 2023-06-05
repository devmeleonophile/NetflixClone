import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import List from "./List";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/List" Component={List} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
