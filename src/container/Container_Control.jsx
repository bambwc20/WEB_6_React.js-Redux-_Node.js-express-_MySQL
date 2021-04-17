import { connect } from "react-redux";
import { DeleteData } from "../action";
import Control from "../Components/Control";
import { urlToState } from "../action";

var mapStateToProps = (state) => {
  return {
    mode: state.reducer.mode,
    isLoading: state.reducer.isLoading,
    selected_content_id: state.reducer.selected_content_id,
  };
};
var mapDispatchToProps = (Dispatch) => {
  return {
    onClick: (pathname, id, isLoading) => {
      Dispatch(urlToState(pathname, id, isLoading));
    },
    onSubmit: (id) => {
      Dispatch(DeleteData(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);
