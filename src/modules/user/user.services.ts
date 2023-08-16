import { Profile, User } from '@prisma/client'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async (data: User): Promise<User> => {
    const result = await prisma.user.create({
        data
    })
    return result
}

const insertUpdateProfile = async (data: Profile): Promise<Profile> => {
    const isExit = await prisma.profile.findUnique({
        where: {
            userId: data.userId
        }
    })
    if (isExit) {
        const result = await prisma.profile.update({
            where: {
                userId: data.userId
            },
            data: {
                bio: data.bio
            }
        })
        return result
    }

    const result = await prisma.profile.create({
        data
    })
    return result
}

export const UserService = {
    insertIntoDB,
    insertUpdateProfile
}