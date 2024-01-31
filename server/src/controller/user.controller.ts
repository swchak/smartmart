import { ok } from "assert";
import { User } from "../database/entities/user.entity";
import dataSource from "../db-source";
import { IGetUserAuthInfoRequest } from "../middleware/auth.middleware";
import { Request, Response } from "express";
import { registerValidation } from "../validation/register.validation";
import { updateValidation } from "../validation/update.validation";

export const GetUsers = async (req: IGetUserAuthInfoRequest, res: Response) => {
  let users = [];
  try {
    users = await dataSource.getRepository(User).find();
  } catch (err) {
    return res
      .status(400)
      .send({ mesasge: "ERROR:: unable to get all the user" });
  }
  res.send(users);
};

export const GetUser = async (req: IGetUserAuthInfoRequest, res: Response) => {
  let user;
  try {
    user = await dataSource
      .getRepository(User)
      .findOneBy({ id: parseInt(req.params.id) });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "ERROR:: unable to find user by id" });
  }

  res.status(200).send(user);
};

export const UpdateUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  // validate the body
  const { error } = updateValidation.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error });
  }

  // update the user entity
  try {
    await dataSource.getRepository(User).update(req.params.id, req.body);
  } catch (err) {
    return res.status(400).send({ message: err });
  }

  // on successful updating of user entity return the updated user entity
  let user;
  try {
    user = await dataSource
      .getRepository(User)
      .findOneBy({ id: parseInt(req.params.id) });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "ERROR:: Unable to retrieve the updated user entity" });
  }

  res.send(user);
};

export const CreateUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  // validate the body
  const { error } = registerValidation.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error });
  }
  let user;
  try {
    user = await dataSource.getRepository(User).create(req.body);
  } catch (err) {
    res.status(400).send({ message: "ERROR:: unable to create user entity" });
  }

  res.status(200).send(user);
};

export const DeleteUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  if (!req.params.id) {
    return res
      .status(400)
      .send({ message: "ERROR:: DELETE FAILED INVALID ID PARAM" });
  }

  try {
    await dataSource
      .getRepository(User)
      .delete({ id: parseInt(req.params.id) });
  } catch (err) {
    return res.status(400).send({ message: "ERROR: Delete failed for entity" });
  }

  res.status(200).send("SUCCESS:: DELETED user ENTITY");
};
