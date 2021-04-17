import Article from "../Components/Article";
import { connect } from "react-redux";

var mapStateToProps = (state) => {
  return {
    mode: state.reducer.mode,
    isLoading: state.reducer.isLoading,
    contents: state.reducer.contents,
    selected_content_id: state.reducer.selected_content_id,
  };
};
// var mapDispatchToProps = (Dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(Article);
