import { redirect, Route, Router } from "@solidjs/router";
import { createEffect, type Component } from "solid-js";
import BoardPage from "./pages/board";
import { ROUTES } from "./consts/routes";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register/RegisterPage";

const App: Component = () => {
  createEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId && !([ROUTES.LOGIN, ROUTES.REGISTER] as string[]).includes(window.location.pathname) ) {
      redirect(ROUTES.LOGIN);
    }
  });

  return (
    <Router>
      <Route path={ROUTES.BOARD} component={BoardPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.REGISTER} component={RegisterPage} />
    </Router>
  );
};

export default App;
