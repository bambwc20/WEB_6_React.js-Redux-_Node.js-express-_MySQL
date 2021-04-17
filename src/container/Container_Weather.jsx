import { connect } from "react-redux";
import Weather from "../Components/Weather";

var mapStateToProps = (state) => {
  return {
    weather: state.weather_reducer.weather,
  };
};
var mapDispatchToProps = (Dispatch) => {
  return {
    onEvent: (weather) => {
      Dispatch({ type: weather });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
