import { Request, Response } from "express";
import { registerValidation } from "../validation/register.validation";
import bcryptjs from "bcryptjs";
import dataSource from "../db-source";
import { User } from "../database/entities/user.entity";
import { sign, verify } from "jsonwebtoken";
import { createSecretKey } from "crypto";
import { IGetUserAuthInfoRequest } from "../middleware/auth.middleware";

// REGISTER USER
export const Register = async (req: Request, res: Response) => {
  const body = req.body;

  // check if all infos were send
  const { error } = registerValidation.validate(body);
  // break if something is missing
  if (error) {
    return res.status(400).send(error.details);
  }
  // verify that password is confirmed
  if (body.password !== body.passwordConfirm) {
    return res.status(400).send({
      message: "ERROR :: Passwords do not match!",
    });
  }
  // save password to database
  const userTable = dataSource.getRepository(User);

  const { password, ...user } = await userTable.save({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: await bcryptjs.hash(body.password, 10),
  });

  res.send(user);
};

// LOGIN USER
export const Login = async (req: Request, res: Response) => {
  // check if user exists in db
  const user = await dataSource.getRepository(User).findOneBy({
    email: req.body.email,
  });

  // if does not exists break
  if (!user) {
    return res.status(404).send({
      message: "ERROR :: User does not exists!",
    });
  }

  // if exists but password is wrong break
  if (!(await bcryptjs.compare(req.body.password, user.password))) {
    return res.status(404).send({
      message: "ERROR :: Invalid credentials!",
    });
  }

  // don't return password after successful login
  // const { password, ...data } = user;
  // return JWT to authenticated user
  const payload = { id: user.id };
  const token = sign(payload, "secretkey");
  res.cookie("jwt", token, {
    // keep cookie in node.js backend
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, //1day
  });
  res.send("INFO :: Successfully logged in.");
};

export const AuthenticatedUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  console.log("inside autneticated user route");

  // const jwt = req.cookies["jwt"];
  // // get user id from jwt
  // const payload: any = verify(jwt, "secretkey");

  const { password, ...user } = req.user!;
  res.send(user);

  // if (!payload) {
  //   return res.status(401).send({
  //     message: "ERROR :: User unauthenticated!",
  //   });
  // }
  // // return user info  for user id
  // const user = await dataSource.getRepository(User).findOneBy(payload.id);
  // const { password, ...userWithoutPassword } = user!;

  // res.send(userWithoutPassword);
};

export const Logout = async (req: Request, res: Response) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "INFO :: Successfully logged out.",
  });
};
