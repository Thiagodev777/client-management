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

  newUser(req, res) {
    res.render("pages/UsersPages/newUser");
  },

  async saveUser(req, res) {
    const { name, telephone, email } = req.body;
    if (name && telephone && email) {
      try {
        await User.create({
          name,
          telephone,
          email,
        });
        res.redirect("/users");
      } catch (error) {
        console.log(error);
        res.redirect("/");
      }
    } else {
      res.redirect("/");
    }
  },

  async deleteUser(req, res) {
    const { id } = req.body;
    if (id != undefined) {
      if (!isNaN(id)) {
        try {
          await User.destroy({
            where: {
              id: id,
            },
          });
          res.redirect("/users");
        } catch (error) {
          console.log(error);
          res.redirect("/users");
        }
      } else {
        res.redirect("/users");
      }
    } else {
      res.redirect("/users");
    }
  },
};
