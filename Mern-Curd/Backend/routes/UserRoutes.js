const {UserCreate,AllData,single,change,delete_user}=require('../Controllers/userController')
const express=require("express");

const router=express.Router();


router.post("/",UserCreate)
router.get('/',AllData);
router.get('/:id',single);
router.put('/:id',change)
router.delete("/:id",delete_user)

  
module.exports = router;