const express = require("express");
const UserController = require("../../../controllers/userController");

const router=express.Router();

const userController=new UserController()

router.post('/signup',userController.createUser)

module.exports=router