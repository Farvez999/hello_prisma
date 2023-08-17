import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      autor: true,
      category: true,
    },
  });
  return result;
};

const getAllPost = async () => {
  const result = await prisma.post.findMany({
    include: {
      autor: true,
      category: true,
    },
  });
  return result;
};

const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      autor: true,
      category: true,
    },
  });
  return result;
};

export const PostServices = {
  createPost,
  getAllPost,
  getSinglePost,
};
