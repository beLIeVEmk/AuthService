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

    deleteUser=(async (req,res)=>{
        try {
            const delUserResponse=await this.userService.deleteUser(req.params,userId);
            helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,delUserResponse,res)
        } catch (error) {
            res.status(500).json({
                statusCode:500,
                message:"Create city Error",
                data:{}
            })
        }
    })

    getUserById=(async(req,res)=>{
        try {
            const getUserResponse=await this.userService.getUserById(req.params.userId);
            helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,getUserResponse,res)
        } catch (error) {
            
            res.status(500).json({
                statusCode:500,
                message:"Create city Error",
                data:{}
            })
        }
    })

    signIn=(async(req,res)=>{
        try {
            const token=await this.userService.signIn(req.body.email,req.body.password);
            helperFunctions.createResBody(codes.SuccessCode.CREATED,messages.Success,token,res)
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