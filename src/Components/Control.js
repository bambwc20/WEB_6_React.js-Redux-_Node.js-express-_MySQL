import React, { Component } from "react";

class Control extends Component {
  render() {
    if (this.props.isLoading === true) {
      return "";
    } else if (this.props.isLoading === false) {
      //
      switch (this.props.mode) {
        case null:
          return "";

        case "WELCOME":
          return (
            <ul>
              <li>
                <a
                  href="#create"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onClick(
                      "/topics/create",
                      null,
                      this.props.isLoading
                    );
                  }}
                >
                  create
                </a>
              </li>
            </ul>
          );

        case "READ":
          return (
            <ul>
              <li>
                <a
                  href="#create"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onClick(
                      "/topics/create",
                      null,
                      this.props.isLoading
                    );
                  }}
                >
                  create
                </a>
              </li>
              <li>
                <a
                  href="#update"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onClick(
                      "/topics/update",
                      this.props.selected_content_id,
                      this.props.isLoading
                    );
                  }}
                >
                  update
                </a>
              </li>
              <li>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onSubmit(e.target.id.value);
                  }}
                >
                  <input
                    type="hidden"
                    name="id"
                    value={this.props.selected_content_id || ""}
                  />
                  <input type="submit" value="delete" />
                </form>
              </li>
            </ul>
          );

        case "CREATE":
          return (
            <ul>
              <li>
                <a
                  href="#create"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onClick(
                      "/topics/create",
                      null,
                      this.props.isLoading
                    );
                  }}
                >
                  create
                </a>
              </li>
            </ul>
          );

        case "UPDATE":
          return (
            <ul>
              <li>
                <a
                  href="#create"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onClick(
                      "/topics/create",
                      null,
                      this.props.isLoading
                    );
                  }}
                >
                  create
                </a>
              </li>
              <li>
                <a
                  href="#update"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onClick(
                      "/topics/update",
                      this.props.selected_content_id,
                      this.props.isLoading
                    );
                  }}
                >
                  update
                </a>
              </li>
            </ul>
          );

        default:
          break;
      }
      //
    }
  }
}

export default Control;
