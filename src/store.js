//라이브러리
import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const weather_initState = {
  weather: "DAY",
};

const weather_reducer = (state = weather_initState, action) => {
  switch (action.type) {
    case "DAY":
      return { ...state, weather: "DAY" };

    case "NIGHT":
      return { ...state, weather: "NIGHT" };

    default:
      return state;
  }
};

const initState = {
  mode: null,
  isLoading: true,
  contents: null,
  selected_content_id: null,
};

//리듀서
const reducer = (state = initState, action) => {
  switch (action.type) {
    //
    case "WELCOME":
      return {
        ...state,
        mode: "WELCOME",
        isLoading: false,
        contents:
          action.contents !== state.contents && action.contents
            ? action.contents
            : state.contents,
        selected_content_id: null,
      };

    case "READ":
      return {
        ...state,
        mode: "READ",
        isLoading: false,
        contents:
          action.contents !== state.contents && action.contents
            ? action.contents
            : state.contents,
        selected_content_id:
          action.selected_content_id !== state.selected_content_id &&
          action.selected_content_id
            ? action.selected_content_id
            : state.selected_content_id,
      };

    case "CREATE":
      return {
        ...state,
        mode: "CREATE",
        isLoading: false,
        contents:
          action.contents !== state.contents && action.contents
            ? action.contents
            : state.contents,
        selected_content_id: null,
      };

    case "UPDATE":
      return {
        ...state,
        mode: "UPDATE",
        isLoading: false,
        contents:
          action.contents !== state.contents && action.contents
            ? action.contents
            : state.contents,
        selected_content_id:
          action.selected_content_id !== state.selected_content_id &&
          action.selected_content_id
            ? action.selected_content_id
            : state.selected_content_id,
      };

    case "DATA_REQUEST":
      return {
        ...state,
        mode: null,
        isLoading: true,
        contents: null,
        selected_content_id: null,
      };

    default:
      return state;
  }
};

export function configureStore(history) {
  return createStore(
    combineReducers({
      router: connectRouter(history),
      reducer: reducer,
      weather_reducer: weather_reducer,
    }),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), thunk, logger)
    )
  );
}
