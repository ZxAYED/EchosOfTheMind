import { IUser } from "./user.interface"
import { userModel } from "./user.model"


const createUserIntoDb = async (payload: IUser) => {

    const result = await userModel.create(payload)
    return result
}

export const userService = {
    createUserIntoDb,
}