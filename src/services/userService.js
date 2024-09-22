const jwt = require("jsonwebtoken");
const UserRepository = require("../repository/userRepository");
const { JWT_KEY } = require("../config/serverConfig");
const TokenService = require("./tokenService");
const helperFunctions=require('../utils/utils')
class UserService{
    constructor(){
        this.userRepo=new UserRepository()
        this.tokenService=new TokenService()
    }

    async createUser(reqBody){
        try {
            return await this.userRepo.createUser(reqBody)
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(userId){
        try {
            await this.userRepo.deleteUser(userId)
        } catch (error) {
            throw error;
        }
    }
    async getUserById(userId){
        try {
            return await this.userRepo.getUserById(userId);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async signIn(email,pwd){
        try {
            const userObj=await this.userRepo.getUserByMail(email);
            if(!userObj){
                throw new Error('Invalid credentials')
            }
            if(!helperFunctions.comparePassword(pwd,userObj.password)){
                throw new Error('Invalid password');
            }
            const token=this.tokenService.createToken(userObj,JWT_KEY,'1h');
            return token;
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

module.exports=UserService