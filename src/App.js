import React, { Component } from "react";
import Container_Header from "./container/Container_Header";
import Container_Article from "./container/Container_Article";
import Container_Nav from "./container/Container_Nav";
import Container_Control from "./container/Container_Control";
import Container_Weather from "./container/Container_Weather";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { urlToState } from "./action";
import "./App.css";
import url from "url";

class App extends Component {
  componentDidMount() {
    const { pathname, search, onLoad, isLoading } = this.props;
    const { id } = url.parse(search, true).query;
    //초기접속설정
    onLoad(pathname, id, isLoading);
  }

  render() {
    return (
      <>
        <Container_Header />
        <Container_Nav />
        <Container_Control />
        <Container_Article />
        <Container_Weather />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    isLoading: state.reducer.isLoading,
  };
};
const mapDispatchToProps = (Dispatch) => {
  return {
    onLoad: (pathname, id, isLoading) => {
      Dispatch(urlToState(pathname, id, isLoading));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
