const express=require("express");
const router=express.Router();
const UserController=require('../Controllers/userController')


router.post('/',UserController.createUse)
router.get('/',UserController.getUser)
router.get('/:id',UserController.SingleUser)
router.put('/:id',UserController.UpdateUsr)
router.delete('/:id',UserController.DeleteUser)


module.exports=router