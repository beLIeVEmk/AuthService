const helperFunctions=require('../utils/utils')
const codes=require('../utils/errorCodes');
const messages = require('../utils/messages');

const UserService = require("../services/userService");

class UserController{
    constructor(){
        this.userService=new UserService();
    }

    createUser=(async (req,res)=>{
        try {
            const createUserResponse=await this.userService.createUser(req.body);
            helperFunctions.createResBody(codes.SuccessCode.CREATED,messages.Success,createUserResponse,res)
        } catch (error) {
            res.status(500).json({
                statusCode:500,
                message:"Create city Error",
                data:{}
            })
        }
    })
}

module.exports=UserController