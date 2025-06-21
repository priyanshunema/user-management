const { Role, User } = require("../models");

exports.createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const exists = await Role.findOne({ where: { name } });
    if (exists) return res.status(400).json({ message: "Role already exists" });

    const role = await Role.create({ name });
    res.status(201).json({ message: "Role created", role });
  } catch (err) {
    res.status(500).json({ message: "Error creating role", error: err.message });
  }
};

exports.assignRoles = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const roleIds = req.body.roleIds; // e.g., [1, 2]
    await user.setRoles(roleIds);

    res.json({ message: "Roles assigned to user" });
  } catch (err) {
    res.status(500).json({ message: "Error assigning roles", error: err.message });
  }
};
