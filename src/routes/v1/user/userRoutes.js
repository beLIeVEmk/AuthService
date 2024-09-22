const express = require("express");
const UserController = require("../../../controllers/userController");

const router=express.Router();

const userController=new UserController()

router.post('/signup',userController.createUser)
router.delete('/deleteUser/:userId',userController.deleteUser)
router.get('/getUser/:userId',userController.getUserById)
router.post('/signIn',userController.signIn)
module.exports=router