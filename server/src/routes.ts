import { Router } from "express";
import {
  Register,
  Login,
  AuthenticatedUser,
  Logout,
} from "./controller/auth.controller";
import { checkAuthState } from "./middleware/auth.middleware";

export const routes = (router: Router) => {
  router.post("/api/register", Register);
  router.post("/api/login", Login);
  // get authenticated user from jwt
  router.get("/api/user", checkAuthState, AuthenticatedUser);
  router.get("/api/logout", Logout);
};
