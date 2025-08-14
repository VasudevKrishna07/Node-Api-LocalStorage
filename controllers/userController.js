// controllers/userController.js
let users = require('../data/users');

// GET all users
exports.getUsers = (req, res) => {
    res.status(200).json(users);
};

// GET user by ID
exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
};

// POST create user
exports.createUser = (req, res) => {
    const { firstName, lastName, hobby } = req.body;
    const newUser = {
        id: String(users.length + 1),
        firstName,
        lastName,
        hobby
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

// PUT update user
exports.updateUser = (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    // Merge existing with updates
    users[index] = { ...users[index], ...req.body };
    res.status(200).json(users[index]);
};

// DELETE user
exports.deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    const deletedUser = users.splice(index, 1);
    res.status(200).json(deletedUser[0]);
};
