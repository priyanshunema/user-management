const { User, Role } = require("../models");

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id, { include: Role });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  await user.update(req.body);
  res.json({ message: "User updated", user });
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  user.isActive = false;
  await user.save();
  res.json({ message: "User disabled" });
};

exports.listUsers = async (req, res) => {
  const { firstName, lastName, email, phone, role } = req.query;

  const where = {};
  if (firstName) where.firstName = firstName;
  if (lastName) where.lastName = lastName;
  if (email) where.email = email;
  if (phone) where.phone = phone;

  const users = await User.findAll({
    where,
    include: role ? {
      model: Role,
      where: { name: role }
    } : Role
  });

  res.json(users);
};
