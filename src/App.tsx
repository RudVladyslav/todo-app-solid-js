import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import BoardPage from "./pages/board";
import { ROUTES } from "./consts/routes";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";

const App: Component = () => {
  return (
    <Router>
      <Route path={ROUTES.BOARD} component={BoardPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.LOGIN} component={LoginPage} />
    </Router>
  );
};

export default App;
