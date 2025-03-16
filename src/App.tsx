import { redirect, Route, Router, useNavigate } from "@solidjs/router";
import { createEffect, type Component } from "solid-js";
import BoardPage from "./pages/board";
import { ROUTES } from "./consts/routes";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register/RegisterPage";

const App: Component = () => {
  // const navigate = useNavigate();
  // TODO: Uncomment this code to enable authentication and fix redirect 
  // createEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   const isPublic = ([ROUTES.LOGIN, ROUTES.REGISTER] as string[]).includes(window.location.pathname);
  //   if (!userId && !isPublic) {
  //     redirect(ROUTES.LOGIN);
  //   } else if (userId && isPublic) {
  //     redirect(ROUTES.HOME);
  //   }
  // });

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
