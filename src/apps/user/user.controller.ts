import catchAsync from "../utils/catchAsync";
import { userService } from "./user.service";


const createUser = catchAsync(async (req, res) => {

    const result = await userService.createUserIntoDb(req.body)
    res.json({
        "success": true,
        "message": "User registered successfully",
        "statusCode": 201,
        "data": result
    })

})

export const userController = {
    createUser
}