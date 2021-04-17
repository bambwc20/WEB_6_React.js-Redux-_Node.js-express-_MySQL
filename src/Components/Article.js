import React, { Component } from "react";
import Container_Create from "../container/Container_Create";
import Container_Update from "../container/Container_Update";

class Article extends Component {
  parseContentObject = (contents, content_id) => {
    const selected_object = contents.find((x) => x.id === Number(content_id));
    var id = selected_object.id;
    var title = selected_object.title;
    var description = selected_object.description;
    return { id, title, description };
  };

  render() {
    var contents, content_id;
    var contentObject = {};

    //즉 정상적인 화면이 뜨는 조건은 isLoading가 false이고 mode가 null이 아니어야 한다.
    if (this.props.isLoading === true) {
      return "";
    } else if (this.props.isLoading === false) {
      switch (this.props.mode) {
        case null:
          return "";

        case "WELCOME":
          contentObject.title = "Welcome";
          contentObject.description = "welcome";
          break;

        case "READ":
          contents = this.props.contents;
          content_id = this.props.selected_content_id;
          contentObject = this.parseContentObject(contents, content_id);
          break;

        case "CREATE":
          contentObject.title = "Create";
          contentObject.description = <Container_Create />;
          break;

        case "UPDATE":
          contentObject.title = "Update";
          contentObject.description = <Container_Update />;
          break;

        default:
          break;
      }

      return (
        <article>
          <h2>{contentObject.title}</h2>
          {contentObject.description}
        </article>
      );
    }
  }
}

export default Article;
