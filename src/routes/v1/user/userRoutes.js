const express = require("express");
const UserController = require("../../../controllers/userController");
const { authMiddleware, signInMiddleware } = require("../../../middlewares/middleware");

const router=express.Router();

const userController=new UserController()

router.post('/signup',authMiddleware,userController.createUser)
router.delete('/deleteUser/:userId',userController.deleteUser)
router.get('/getUser/:userId',userController.getUserById)
router.post('/signIn',signInMiddleware,userController.signIn)
module.exports=router