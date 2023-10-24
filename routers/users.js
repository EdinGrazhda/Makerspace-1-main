const router = require("express").Router();
const{getUsers,postUsers,putUsers,deleteUsers}=require("../controllers/users.js")
router.get('/',getUsers)
router.post('/',postUsers)
router.put('/',putUsers)
router.delete('/',deleteUsers)

