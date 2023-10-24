const router = require('express').Router();
const {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUser,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;