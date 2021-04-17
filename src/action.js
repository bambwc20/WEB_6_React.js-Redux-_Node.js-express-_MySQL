import axios from "axios";
import { push } from "connected-react-router";

export var getData = (type, id) => (dispatch, getState) => {
  axios.get("http://localhost:4000/api/topics").then((res) => {
    dispatch({
      type: type,
      contents: res.data,
      selected_content_id: id,
    });
  });
};

export var urlToState = (pathname, id, isLoading) => (dispatch, getState) => {
  if (isLoading === true) {
    //초기접속설정
    switch (pathname) {
      case "/":
        dispatch(getData("WELCOME", null));
        break;

      case "/topics":
        dispatch(getData("READ", id));
        break;

      case "/topics/create":
        dispatch(getData("CREATE", null));
        break;

      case "/topics/update":
        dispatch(getData("UPDATE", id));
        break;

      default:
        dispatch(getData("WELCOME", null));
        break;
    }
    //
  } else if (isLoading === false) {
    //
    switch (pathname) {
      case "/":
        dispatch(push("/"));
        dispatch({ type: "WELCOME" });
        break;

      case "/topics":
        dispatch(push(`/topics?id=${id}`));
        dispatch({ type: "READ", selected_content_id: id });
        break;

      case "/topics/create":
        dispatch(push("/topics/create"));
        dispatch({ type: "CREATE" });
        break;

      case "/topics/update":
        dispatch(push(`/topics/update?id=${id}`));
        dispatch({ type: "UPDATE", selected_content_id: id });
        break;

      default:
        dispatch(push("/"));
        dispatch({ type: "WELCOME" });
        break;
    }
    //
  }
};

export var CreateData = (title, description) => (dispatch, getState) => {
  dispatch({ type: "DATA_REQUEST" });
  axios
    .post("http://localhost:4000/api/topics/create", {
      data: {
        title: title,
        description: description,
      },
    })
    .then((res) => {
      var redirectId = res.data.insertId;
      dispatch(push(`/topics?id=${redirectId}`));
      dispatch(getData("READ", redirectId));
    });
};

export var UpdateData = (id, title, description) => (dispatch, getState) => {
  dispatch({ type: "DATA_REQUEST" });
  axios
    .post(`http://localhost:4000/api/topics/update/${id}`, {
      data: {
        id: id,
        title: title,
        description: description,
      },
    })
    .then((res) => {
      dispatch(push(`/topics?id=${id}`));
      dispatch(getData("READ", id));
    });
};

export var DeleteData = (id) => (dispatch, getState) => {
  dispatch({ type: "DATA_REQUEST" });
  axios
    .post(`http://localhost:4000/api/topics/delete/${id}`, {
      data: {
        id: id,
      },
    })
    .then((res) => {
      dispatch(push("/"));
      dispatch(getData("WELCOME", null));
    });
};
