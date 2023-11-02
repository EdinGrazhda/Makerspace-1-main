const router = require('express').Router();
const {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUser
} = require('../controllers/users');

// const { validateData } = require('../middlewares/validateData');

// router.get('/search', getUserByName);
router.get('/:id', getUser);

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;