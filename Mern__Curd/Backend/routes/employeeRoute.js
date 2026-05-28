const express=require("express");

const {CreateEmployee,GetAll,SingleGet,UpdateUser,Delete_user} =require ('../controllers/employeeController')


const router=express.Router();

router.post('/',CreateEmployee);

router.get('/',GetAll);

router.get('/;id',SingleGet);

router.put('/:id',UpdateUser);
router.delete('/:id',Delete_user);

module.exports=router