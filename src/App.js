import React, { Component } from "react";
import Header from "./Header";
import Modal from "./Modal";
import "./App.css";
import { Provider } from "./context";

class App extends Component {
  state = {
    modal: null,
  }
  render() {
    const contextValue = {
      state: this.state,
      setState: this.setState.bind(this),
    };
    return (
      <Provider value={contextValue}>
        <div className="App">
          <Header />
          <Modal />
        </div>
      </Provider>
    );
  }
}

export default App;
