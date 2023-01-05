const User = require("../models/User");

module.exports = {
  async home(req, res) {
    try {
      const users = await User.findAll();
      res.render("pages/UsersPages/index", {
        users,
      });
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  },
};
