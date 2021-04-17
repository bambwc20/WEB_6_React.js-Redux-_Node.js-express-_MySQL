import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import { configureStore } from "./store";

const history = createBrowserHistory(); //히스토리 객체 반환
const store = configureStore(history);

//url 히스토리가 state로 관리되면서 url이 랜더링된다고 생각면된다?

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
