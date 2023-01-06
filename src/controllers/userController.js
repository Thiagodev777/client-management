const User = require("../models/User");
const Op = require("sequelize").Op;

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

  async userEdit(req, res) {
    const { id } = req.params;
    if (id != undefined) {
      if (!isNaN(id)) {
        try {
          const user = await User.findOne({ where: { id: id } });
          if (user) {
            res.render("pages/UsersPages/editUser", {
              user,
            });
          } else {
            res.redirect("/users");
          }
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

  async updateUser(req, res) {
    const { id, name, telephone, email } = req.body;
    if (id && name && telephone && email) {
      try {
        await User.update(
          {
            name,
            telephone,
            email,
          },
          {
            where: { id: id },
          }
        );
        res.redirect("/users");
      } catch (error) {
        console.log(error);
        res.redirect("/users");
      }
    } else {
      res.redirect("/users");
    }
  },

  async searchUser(req, res) {
    const { q } = req.query;

    if (q) {
      try {
        const users = await User.findAll({
          where: {
            name: {
              [Op.like]: `${q}%`,
            },
          },
        });
        if (users) {
          res.render("pages/UsersPages/searchPage", {
            users,
          });
        } else {
          res.redirect("/users");
        }
      } catch (error) {
        console.log(error);
        res.redirect("/users");
      }
    } else {
      res.redirect("/users");
    }

    res.render("pages/UsersPages/searchPage");
  },
};
