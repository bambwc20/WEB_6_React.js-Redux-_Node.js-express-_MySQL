import Nav from "../Components/Nav";
import { connect } from "react-redux";
import { urlToState } from "../action";

var mapStateToProps = (state) => {
  return {
    contents: state.reducer.contents,
    isLoading: state.reducer.isLoading,
  };
};
var mapDispatchToProps = (Dispatch) => {
  return {
    onClick: (pathname, id, isLoading) => {
      Dispatch(urlToState(pathname, id, isLoading));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
