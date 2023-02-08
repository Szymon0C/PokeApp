const User = require("../../db/models/user");

class UserActions {
  async getAllUsers(req, res) {
    let doc;

    try {
      doc = await User.find({});
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(doc);
  }

  async saveUser(req, res) {
    let user;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const favourite = req.body.password;

    try {
      user = new User({ name, email, password, favourite });
      await user.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(user);
  }
}

module.exports = new UserActions();
