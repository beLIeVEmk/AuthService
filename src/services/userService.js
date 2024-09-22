const UserRepository = require("../repository/userRepository");

class UserService{
    constructor(){
        this.userRepo=new UserRepository()
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
}

module.exports=UserService