const router = require('express').Router();
const {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUser,
    login
} = require('../controllers/users');

const validateData  = require('../middlewares/verifyToken');

// router.get('/search', getUserByName);
router.get('/:id', getUser);

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login',login)

module.exports = router;