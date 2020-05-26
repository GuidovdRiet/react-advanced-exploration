import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

// Pages
import LoginPage from "../components/pages/LoginPage";
import ProtectedPage from "../components/pages/ProtectedPage";
import Message from "../components/pages/Message";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/timeline/message/:id">
          <Message />
        </PrivateRoute>
        <PrivateRoute path="/">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
