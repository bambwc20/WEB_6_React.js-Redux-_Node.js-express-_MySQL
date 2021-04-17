import React, { Component } from "react";

class Update extends Component {
  parseContentObject = (contents, content_id) => {
    const selected_object = contents.find((x) => x.id === Number(content_id));
    var id = selected_object.id;
    var title = selected_object.title;
    var description = selected_object.description;
    return { id, title, description };
  };

  contentObject = this.parseContentObject(
    this.props.contents,
    this.props.selected_content_id
  );

  state = {
    id: this.contentObject.id,
    title: this.contentObject.title,
    description: this.contentObject.description,
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(
            e.target.id.value,
            e.target.title.value,
            e.target.description.value
          );
        }}
      >
        <input type="hidden" name="id" value={this.state.id || ""} />
        <p>
          <input
            type="text"
            name="title"
            onChange={this.onChangeHandler.bind(this)}
            placeholder="title"
            value={this.state.title}
          />
        </p>
        <p>
          <textarea
            type="text"
            name="description"
            onChange={this.onChangeHandler.bind(this)}
            placeholder="description"
            value={this.state.description}
          ></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}

export default Update;
