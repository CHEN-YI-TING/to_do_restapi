const express = require("express");
const { mainModule } = require("process");
const router = express.Router();
const db = require("../models");

//get(查詢所有todo)
router.get("/all", (req, res) => {
  db.Todo.findAll().then((todos) => res.send(todos));
});

// get todo by id
router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  }).then((todo) => res.send(todo));
});

//post new todo (新增todo-list)
router.post("/new", (req, res) => {
  db.Todo.create({
    text: req.body.text,
  }).then((submittedTodo) => res.send(submittedTodo));
});

//delete todo by id
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

//update todo text
router.put("/edit", (req, res) => {
  db.Todo.update({ text: req.body.text }, { where: { id: req.body.id } }).then(
    () => {
      res.send("test update success");
    }
  );
});
module.exports = router;
