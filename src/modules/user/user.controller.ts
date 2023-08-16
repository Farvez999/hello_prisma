import { Request, Response } from 'express'
import { UserService } from './user.services'

const insertIntoDB = async (req: Request, res: Response) => {
    try {
        const result = await UserService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "User create successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

const insertOrUpdateProfile = async (req: Request, res: Response) => {
    try {
        const result = await UserService.insertUpdateProfile(req.body);
        res.send({
            success: true,
            message: "Profile create or updeted successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

export const UserController = {
    insertIntoDB,
    insertOrUpdateProfile
}