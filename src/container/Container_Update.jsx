import { connect } from "react-redux";
import { UpdateData } from "../action";
import Update from "../Components/Update";

var mapStateToProps = (state) => {
  return {
    contents: state.reducer.contents,
    selected_content_id: state.reducer.selected_content_id,
  };
};
var mapDispatchToProps = (Dispatch) => {
  return {
    onSubmit: (id, title, description) => {
      Dispatch(UpdateData(id, title, description));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
