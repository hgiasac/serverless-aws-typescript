import { Request, Response } from "express";

export const hello = async (_: Request, res: Response) => {
  res.status(200).json({
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
    }),
  });

};
