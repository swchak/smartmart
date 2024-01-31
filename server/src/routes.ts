import { Router } from "express";
import {
  Register,
  Login,
  AuthenticatedUser,
  Logout,
  UpdateUserInfo,
} from "./controller/auth.controller";
import { CheckAuthState } from "./middleware/auth.middleware";
import { GetUsers, GetUser, UpdateUser, CreateUser, DeleteUser } from "./controller/user.controller";

export const routes = (router: Router) => {
  // register new user
  router.post("/api/register", Register);

  //login as a user
  router.post("/api/login", Login);

  // get authenticated user from jwt
  router.get("/api/user", CheckAuthState, AuthenticatedUser);

  // update user info
  router.put("/api/users/info", CheckAuthState, UpdateUserInfo);

  // force expire jwt to logout
  router.get("/api/logout", Logout);

  // user admin - get users
  router.get("/api/users", CheckAuthState, GetUsers);

  // user admin - get user by ID
  router.get("/api/users/:id", CheckAuthState, GetUser);

  // user admin - update user 
  router.put("/api/users/:id", CheckAuthState, UpdateUser);

  // user admin - create new user
  router.post("/api/users", CheckAuthState, CreateUser);

  // user admin - delete user
  router.delete("/api/users/:id", CheckAuthState, DeleteUser);

};
