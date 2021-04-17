import React, { Component } from "react";

class Nav extends Component {
  render() {
    if (this.props.isLoading === true) {
      return "";
    } else if (this.props.isLoading === false) {
      //
      switch (this.props.mode) {
        case null:
          return "";

        default:
          return (
            <nav>
              <ol>
                {this.props.contents.map((content) => {
                  return (
                    <li key={content.id}>
                      <a
                        href={content.id}
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.onClick(
                            "/topics",
                            content.id,
                            this.props.isLoading
                          );
                        }}
                      >
                        {content.title}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          );
      }
      //
    }
  }
}

export default Nav;
