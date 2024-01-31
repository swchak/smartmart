import { Request, Response } from "express";
import dataSource from "../db-source";
import { User } from "../database/entities/user.entity";
import { JwtPayload, verify } from "jsonwebtoken";

const userRepository = dataSource.getRepository(User);
export interface IGetUserAuthInfoRequest extends Request {
  user?: User | null; // or any other type
}

export const CheckAuthState = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: Function
) => {
  try {
    const jwt = req.cookies["jwt"];
    console.log(req.cookies);
    const payload: JwtPayload | string = verify(jwt, process.env.SECRET_KEY!);
    if (!payload) {
      return res.status(401).send({
        message: "ERROR :: User unauthenticated!",
      });
    }

    req.user = await userRepository.findOneBy({
      id: (payload as JwtPayload).id,
    });
    // req = authRequest as Request;
    next();
  } catch (e) {
    return res.status(401).send({
      message: "ERROR :: User unauthenticated!",
    });
  }
};
