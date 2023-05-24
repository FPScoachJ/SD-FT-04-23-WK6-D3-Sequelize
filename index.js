const { Op } = require("sequelize");
const express = require("express");
const app = express();
const { Customers, Transactions, Post, User } = require("./models/index");
const PORT = 3001;

// GET ALL CUSTOMERS
app.get("/get_all_customers", async (req, res) => {
  const customers = await Customers.findAll();
  res.send(customers);
});

app.get("/get_customer/:id", async (req, res) => {
  const { id } = req.params;
  const customer = await Customers.findAll({
    where: {
      id: id,
    },
  });
  res.send(customer);
});

app.delete("/delete_customer/:id", async (req, res) => {
  const { id } = req.params;
  const deleteCustomer = await Customers.destroy({
    where: {
      id: id,
    },
  });
  res.send("User Deleted");
});

app.get("/get_customer_by_firstname", async (req, res) => {
  const customers = await Customers.findAll({
    where: {
      name: {
        [Op.startsWith]: "J",
      },
    },
  });
  res.send(customers);
});

app.get("/get_all_transactions", async (req, res) => {
  const transactions = await Transactions.findAll();
  res.send(transactions);
});

app.get("/get_post_by_user", async (req, res) => {
  const post = await Post.findAll({
    attributes: ["title", "content"],
    include: [
      {
        model: User,
        attributes: ["name", "email"],
      },
    ],
  });
  res.send(post);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
