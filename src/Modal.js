import React, { Component } from "react";
import { Consumer } from "./context";
import "./Modal.css";
import ModalLogin from './ModalLogin'

export default class Modal extends Component {
  renderContent=(modal)=>{
    switch(modal){
      case 'login': return <ModalLogin />;
      default: return null;
    }
  }
  render() {
    return (
      <Consumer>
        {({ state }) => {
          const { modal } = state;
          if (!modal) return null;
          return (
            <div className="modal">
              <div className="modal-content">
                {this.renderContent(modal)}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
