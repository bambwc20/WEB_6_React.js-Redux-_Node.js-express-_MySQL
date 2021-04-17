import { connect } from "react-redux";
import { CreateData } from "../action";
import Create from "../Components/Create";

// var mapStateToProps = (state) => {
//   return {};
// };
var mapDispatchToProps = (Dispatch) => {
  return {
    onSubmit: (title, description) => {
      Dispatch(CreateData(title, description));
    },
  };
};

export default connect(null, mapDispatchToProps)(Create);
