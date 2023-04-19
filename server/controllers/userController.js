const User = require('../models/user');

exports.getUsers = async (req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(404).json({ error: 'Users not found' });
    }
};

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = new User({ firstName, lastName, email, password });

  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { firstName, lastName, email, password }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
};
