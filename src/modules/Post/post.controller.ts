import { Request, Response } from "express";
import { PostServices } from "./post.services";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.createPost(req.body);
    res.send({
      success: true,
      message: "Post Create Successfull",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.getAllPost();
    res.send({
      success: true,
      message: "Post fetched Successfull",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.getSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Post fetched Successfull",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  getAllPost,
  getSinglePost,
};
