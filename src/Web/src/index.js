import "babel-polyfill";

// Libs
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, browserHistory } from "react-router-dom";
import { Provider } from "react-redux";
import { OidcProvider, loadUser } from "redux-oidc";
import { ConnectedRouter } from "react-router-redux";

// Our components
// import getRoutes from "./routes";
import createStore, { routerHistory } from "./redux/configureStore";
import userManager from "./utils/userManager";
import PublicLayout from "./containers/App/PublicLayout";
import AdminLayout from "./containers/App/AdminLayout";

import Login from "./containers/Login/Index";
import Callback from "./containers/Login/Callback";

const store = createStore(browserHistory);

// load the current user into the redux store
loadUser(store, userManager);

ReactDOM.render(
  <Provider store={store} key="provider">
    <OidcProvider store={store} userManager={userManager} key="oidcProvider">
      <ConnectedRouter history={routerHistory}>
        <div>
          <Switch>
            <Route
              exact
              path={`/login`}
              key="login"
              component={Login}
            />
            <Route
              exact
              path={`/callback`}
              key="callback"
              component={Callback}
            />
            <Route path="/admin" component={AdminLayout} />
            <Route path="/" component={PublicLayout} />
          </Switch>
        </div>
      </ConnectedRouter>
    </OidcProvider>
  </Provider>,
  document.getElementById("root")
);
