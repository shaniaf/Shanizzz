import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/layout/Users";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    console.log("123");
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}
export default App;
