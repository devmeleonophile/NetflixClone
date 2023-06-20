import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddList from "./AddList";
import "./App.css";
import ChildrenHome from "./ChildrenHome";
import Home from "./Home";
import List from "./List";
import ManageProfile from "./ManageProfile";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/children" Component={ChildrenHome} />
            <Route path="/" Component={ManageProfile} />
            <Route path="/home/List" Component={List} />
            <Route path="/home/addlist" Component={AddList} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
