const { where } = require('sequelize');
const {User}=require('../models/index')

class UserRepository{

    async createUser(data){
        try {
            return await User.create(data)
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async deleteUser(userId){
        try {
            return await User.destroy({
                where:{
                    id:userId
                }
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

module.exports=UserRepository