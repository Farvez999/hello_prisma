import { Request, Response } from "express";
import { CetegoryService } from "./category.services";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await CetegoryService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Category Create",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
  insertIntoDB,
};
