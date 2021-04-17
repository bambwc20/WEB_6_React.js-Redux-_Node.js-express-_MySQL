import { connect } from "react-redux";
import Header from "../Components/Header";
import { urlToState } from "../action";

var mapStateToProps = (state) => {
  return { isLoading: state.reducer.isLoading };
};
var mapDispatchToProps = (Dispatch) => {
  return {
    onClick: (pathname, id, isLoading) => {
      Dispatch(urlToState(pathname, id, isLoading));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
