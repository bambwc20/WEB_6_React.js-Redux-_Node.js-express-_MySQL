import React, { Component } from "react";

class Create extends Component {
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(e.target.title.value, e.target.description.value);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea
            type="text"
            name="description"
            placeholder="description"
          ></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}

export default Create;
