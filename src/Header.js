import React, { Component } from "react";
import "./Header.css";
import { Consumer } from "./context";

const Header = () => (
  <Consumer>
    {({ setState }) => (
      <div className="header">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setState({ modal: "login" });
          }}
        >
          Login
        </a>
      </div>
    )}
  </Consumer>
);

export default Header;