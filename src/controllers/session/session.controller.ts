import { Request, Response } from "express";
import sessionServices from "../../services/session/session.service";

const sessionController = async (req: Request, res: Response) => {
  const { token } = await sessionServices(req.body);
  return res.status(200).json({ token });
};

export default sessionController;
