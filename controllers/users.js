const getUsers = (req, res) => {
    res.send('This is a GET method!!!!!!!');
};

const createUser = (req, res) => {
    res.send('This is a post method!!!!!!!');
};

const updateUser = (req, res) => {
    res.send('This is a Update method!!!!!!!');
};

const deleteUser = (req, res) => {
    res.send('This is a Delete method!!!!!!!');
};

const getUser = (req, res) => {
    let users = [
        {
            id: 1,
            name: 'Hadi',
        },
        { id: 2, name: 'Mumin' },
        { id: 3, name: 'Ali' },
        { id: 4, name: 'Enis' },
    ];

    let selectedUser = [];
    for (let user of users) {
        if (req.params.id == user.id) {
            selectedUser = user;
        }
    }
    res.send(selectedUser);
};

module.exports = { getUsers, createUser, updateUser, deleteUser, getUser };