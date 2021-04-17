import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.isLoading === true) {
      return (
        <header>
          <h1>Loading</h1>
        </header>
      );
    } else if (this.props.isLoading === false) {
      //
      switch (this.props.mode) {
        case null:
          return "";

        default:
          return (
            <header>
              <a
                href="#WEB"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.onClick("/", null, this.props.isLoading);
                }}
              >
                <h1>WEB</h1>
              </a>
            </header>
          );
      }
      //
    }
  }
}

export default Header;
