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
  const options = req.query;
  try {
    const result = await PostServices.getAllPost(options);
    res.send({
      success: true,
      message: "Post fetched Successfull",
      total: result.total,
      data: result.data,
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

const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await PostServices.updatePost(id, data);
    res.send({
      success: true,
      message: "Post Updated Successfull",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await PostServices.deletePost(id);
    res.send({
      success: true,
      message: "Post Deleted Successfull",
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
  updatePost,
  deletePost,
};
